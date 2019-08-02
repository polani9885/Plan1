CREATE PROCEDURE [dbo].[Scheduler_InsertNearBy]
(
	@NearBySearchData NearBySearch ReadOnly
	,@AttractionsId AS INT
	,@AttractionTravelStepsId BIGINT
	,@MapsId INT
)	
AS
BEGIN	
	
	BEGIN TRAN
	BEGIN TRY
		DECLARE @NearBySearchDataInfo AS TABLE (
		[AttractionName] [varchar](500) NULL,
		[GoogleSearchText] [varchar](500) NULL,
		[PlaceId] [varchar](250) NULL,
		[Latitude] [varchar](50) NULL,
		[Longitude] [varchar](50) NULL,
		types Varchar(Max),
		RowNumber INT
		)

		DECLARE @CategoryInfo AS TABLE (
			MapsXCategoryXMasterGoogleTypeId INT NOT NULL,
			[MasterGoogleTypeId] INT NOT NULL,		
			RowNumber INT
		)

		DECLARE @DestinationAttractions userTable_OnlyId
		DECLARE @TravelModeId AS INT
		DECLARE @ExistAttractionsId AS BIGINT
	

		INSERT INTO @NearBySearchDataInfo
		SELECT NS.[AttractionName]           
			   ,NS.[GoogleSearchText]
			   ,NS.PlaceId
			   ,NS.Latitude
			   ,NS.Longitude
			   ,NS.types
			   ,ROW_NUMBER() OVER(ORDER BY NS.GoogleSearchText,A.AttractionName)
		FROM @NearBySearchData NS
		LEFT OUTER JOIN Attractions A WITH(NOLOCK) ON A.SearchAddress = NS.GoogleSearchText AND A.AttractionName = NS.AttractionName 
		WHERE ISNULL(A.SearchAddress,'') =''

	
		DECLARE @CatMaxCount INT = 0
	
		DECLARE @MaxCount INT = (SELECT COUNT(*) FROM @NearBySearchDataInfo)
	 
		WHILE @MaxCount > 0 
		BEGIN
		
			SET @ExistAttractionsId = 0

			SELECT @ExistAttractionsId = A.AttractionsId 
			FROM dbo.Attractions A WITH(NOLOCK)
			JOIN @NearBySearchDataInfo N ON N.Latitude = A.Latitude AND N.Longitude = A.Longitude
			WHERE N.RowNumber = @MaxCount
			AND (N.GoogleSearchText IS NULL OR N.GoogleSearchText = A.SearchAddress)
			AND N.AttractionName = A.AttractionName  

			--Inserting the attraction information if not existed
			IF ISNULL(@ExistAttractionsId,0) = 0 
			BEGIN
				INSERT INTO [dbo].[Attractions]
					([AttractionName]           
					,[SearchAddress]					
					,Latitude
					,Longitude
					,IsLatAndLon
					,IsGoogleSearchTextDone
					)
				SELECT AttractionName
					,GoogleSearchText 					
					,Latitude
					,Longitude
					,1
					,CASE WHEN ISNULL(GoogleSearchText,'') = '' THEN 0 ELSE  1 END
				FROM @NearBySearchDataInfo
				WHERE RowNumber = @MaxCount

				SET @ExistAttractionsId = @@IDENTITY
			END
		
			--Inserting the category for attractions which already existed
			IF ISNULL(@ExistAttractionsId,0) > 0 AND @AttractionTravelStepsId = 0
			BEGIN
				--Verifying this attractionid is added to the next attraction or not


				IF NOT EXISTS(
					SELECT 1 FROM dbo.AttractionsNextAttractions ANA WITH(NOLOCK)
					WHERE ANA.AttractionsId = @AttractionsId
					AND ANA.NextAttractionsId =  @ExistAttractionsId
					)
				BEGIN				

					INSERT INTO [dbo].[AttractionsNextAttractions]
					   ([AttractionsId]
					   ,[NextAttractionsId])
					VALUES 
					(
						@AttractionsId
						,@ExistAttractionsId
					)
				END
				--Verifying the categories are add or not if not adding
				DELETE FROM @CategoryInfo

				INSERT INTO @CategoryInfo
				SELECT   
					MXCMG.MapsXCategoryXMasterGoogleTypeId
					,MXCMG.MasterGoogleTypeId
					,ROW_NUMBER() OVER (ORDER BY MXCMG.MapsXCategoryXMasterGoogleTypeId) 
				FROM [Attractions]..[MapsXCategory] MXC WITH(NOLOCK)
				JOIN [Attractions]..MapsXCategoryXMasterGoogleType MXCMG WITH(NOLOCK) ON MXCMG.MapsXCategoryId = MXC.MapsXCategoryId			
				WHERE IsNeeded = 1
				AND  MXC.MapsId = @MapsId
				AND TypeName IN 
				(
					SELECT Name FROM dbo.splitstring(
						(
							SELECT types FROM @NearBySearchDataInfo WHERE RowNumber =@MaxCount
						)   
					,'~')
				)

				SET @CatMaxCount = 0
				SET @CatMaxCount = (SELECT COUNT(*) FROM @CategoryInfo)

				

				IF @CatMaxCount > 0
				BEGIN
					WHILE @CatMaxCount > 0
					BEGIN
					
					

						IF NOT EXISTS(
							SELECT 1 FROM dbo.AttractionXCategory AC WITH(NOLOCK) 
							WHERE AC.AttractionId = @ExistAttractionsId
							AND AC.CategoryId  = (SELECT TOP 1 MasterGoogleTypeId FROM @CategoryInfo WHERE RowNumber = @CatMaxCount)
							)
						BEGIN
							

							INSERT INTO [dbo].[AttractionXCategory]
								(
									AttractionId
									,CategoryId
									,MapsXCategoryXMasterGoogleTypeId
									,CreatedDate
								)
							SELECT 
								@ExistAttractionsId
								,MasterGoogleTypeId
								,MapsXCategoryXMasterGoogleTypeId
								,GETDATE()
							FROM @CategoryInfo WHERE RowNumber = @CatMaxCount
						END

						SET @CatMaxCount = @CatMaxCount - 1
					END
				END
			END
			
		
			SET @MaxCount = @MaxCount - 1
		END			
	


		
	 
		 IF @AttractionTravelStepsId = 0
		 BEGIN		
			UPDATE Attractions
				SET IsScannedNearBy = 1
			WHERE  AttractionsId = @AttractionsId
		
		END
		ELSE
		BEGIN				
			INSERT INTO [dbo].[AttractionTravelStepsXAttractions]
				   ([AttractionTravelStepsId]
				   ,[AttractionsId])

			SELECT @AttractionTravelStepsId
					,A.AttractionsId				
			FROM @NearBySearchData NS
			JOIN Attractions A WITH(NOLOCK) ON A.SearchAddress = NS.GoogleSearchText AND A.AttractionName = NS.AttractionName 

			SELECT TOP  1 @TravelModeId = TravelModeId FROM dbo.AttractionTravelSteps ATS WITH(NOLOCK)
			JOIN dbo.AttractionTravelTimeDistance ATTD WITH(NOLOCK) ON ATTD.AttractionTravelTimeDistanceId = ATS.AttractionTravelTimeDistanceId

			INSERT INTO @DestinationAttractions (ID)
			SELECT A.AttractionsId				
			FROM @NearBySearchData NS
			JOIN Attractions A WITH(NOLOCK) ON A.SearchAddress = NS.GoogleSearchText AND A.AttractionName = NS.AttractionName 


			EXEC [Admin_AddMissingDistanceRecords]	
			@SourceAttractionID = @AttractionsId,
			@DestinationAttractions= @DestinationAttractions,
			@TravelModeId = @TravelModeId 


			UPDATE dbo.AttractionTravelSteps 
				SET IsNearestRestarentDone = 1
			WHERE AttractionTravelStepsId = @AttractionTravelStepsId		
		
		END
	COMMIT TRAN
	END TRY
	BEGIN CATCH
		SELECT 
			ERROR_NUMBER() AS ErrorNumber,
			ERROR_MESSAGE() AS ErrorMessage;
		RollBack TRAN
		DECLARE @ErrorMessage NVARCHAR(4000);  
		DECLARE @ErrorSeverity INT;  
		DECLARE @ErrorState INT;  
  
		SELECT   
			@ErrorMessage = ERROR_MESSAGE(),  
			@ErrorSeverity = ERROR_SEVERITY(),  
			@ErrorState = ERROR_STATE();  

		RAISERROR (@ErrorMessage, -- Message text.  
               @ErrorSeverity, -- Severity.  
               @ErrorState -- State.  
               );  
	END CATCH
END

