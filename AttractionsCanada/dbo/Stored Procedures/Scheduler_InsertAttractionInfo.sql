﻿CREATE PROCEDURE Scheduler_InsertAttractionInfo 
(
	@AttractionsId INT
	,@CategoryDt user_Category ReadOnly
	,@GoogleWebSite Varchar(500)
	,@GoogleICon Varchar(500)
	,@GoogleInternational_phone_number Varchar(500)
	,@Googleadr_address Varchar(500)
	,@GoogleName Varchar(500)
	,@GoogleRating Decimal(18,2)	
	,@WeekDaysOpenClose user_WeekDaysOpenClose ReadOnly
	,@GooglePhotos user_GooglePhotos ReadOnly
	,@GoogleReview  User_GoogleReview ReadOnly
	,@Pricelevel INT
)	
AS
BEGIN

	UPDATE [dbo].[Attractions]
	   SET [ModifiedDate] = getdate()
		  ,[ModifiedBy] = 'Scheduler'		  
		  ,[GoogleWebSite] = @GoogleWebSite
		  ,[GoogleICon] = @GoogleICon
		  ,[GoogleInternational_phone_number] = @GoogleInternational_phone_number		  
		  ,[GoogleName] = @GoogleName
		  ,[GoogleRating] = @GoogleRating		  	  
		  ,[IsPlaceDetailsDone] = 1		  
		  ,[PriceLevel] = @Pricelevel
	 WHERE AttractionsId = @AttractionsId




	 DECLARE @CategoryList user_Category 
	 DECLARE @Categorycounter AS INT = 0
	 DECLARE @categoryName AS Varchar(250)



	 IF(SELECT Count(1)			
	FROM @CategoryDt
	WHERE Category NOT IN (SELECT TypeName FROM Attractions..MasterGoogleType)) > 0
	BEGIN
		
		
		 INSERT INTO @CategoryList 
		 SELECT Category			
		FROM @CategoryDt
		WHERE Category NOT IN (SELECT TypeName FROM Attractions..MasterGoogleType)

		SET @Categorycounter = (SELECT Count(*) FROM @CategoryList)

		WHILE(@Categorycounter >= 0)
		BEGIN
			IF(SELECT Count(1) FROM @CategoryList) > 0
			BEGIN
				SET @categoryName = (SELECT TOP 1 Category FROM @CategoryList)
				DELETE FROM @CategoryList WHERE Category = @categoryName

				INSERT INTO Attractions..[MasterGoogleType]
				   ([GoogleTypeID]
				   ,[TypeName]
				   ,[IsNeeded]
				   )
				VALUES(
			
						CAST((SELECT ISNULL(MAX(GoogleTypeID),0)+1 FROM Attractions..MasterGoogleType) AS INT),
					@categoryName,
					0
				)
			END

			SET @Categorycounter = @Categorycounter - 1	
		
		 
		END
	END


	
	

	
	DELETE FROM [dbo].[AttractionXCategory]
    WHERE AttractionId = @AttractionsId	

	INSERT INTO [dbo].[AttractionXCategory]
           ([AttractionId]
           ,[CategoryId])

	SELECT 
			@AttractionsId
			,GoogleTypeID
	FROM Attractions..MasterGoogleType
	WHERE TypeName IN (SELECT Category FROM @Categorydt)



	DELETE FROM [dbo].[AttractionsActiveStatus] WHERE AttractionsId = @AttractionsId

	INSERT INTO [dbo].[AttractionsActiveStatus]
           ([AttractionsId]
           ,[OpenTime]
           ,[CloseTime]
           ,[MasterWeekId])
	SELECT    
			 @AttractionsId
			 ,OpenTime
			 ,CloseTime
			 ,WeekDayId
	FROM @WeekDaysOpenClose



	DELETE FROM [dbo].[AttractionReview] WHERE AttractionId = @AttractionsId
	INSERT INTO [dbo].[AttractionReview]
           ([AttractionId]
           ,[Rating]
           ,[Author_name]
           ,[Author_url]
           ,[Language]
           ,[Profile_photo_url]
           ,[Text]           
           ,[IsGoogleCreated])
     SELECT @AttractionsId
			,Rating
			,Author_name
			,Author_url
			,[Language]
			,Profile_photo_url
			,[Text]			
			,1
	 FROM @GoogleReview



	DELETE FROM [dbo].[AttractionPhotos] WHERE AttractionId = @AttractionsId
	INSERT INTO [dbo].[AttractionPhotos]
           ([AttractionId]
           ,[Height]
           ,[Html_attributions]
           ,[Width])
	SELECT 
			@AttractionsId
			,Height
			,Html_attributions	
			,Width
	FROM @GooglePhotos

	

END
