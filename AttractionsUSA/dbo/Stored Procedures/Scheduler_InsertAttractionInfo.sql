CREATE PROCEDURE Scheduler_InsertAttractionInfo 
(
	@AttractionsId INT
	,@Category user_Category ReadOnly
	,@GoogleWebSite Varchar(500)
	,@GoogleICon Varchar(500)
	,@GoogleInternational_phone_number Varchar(500)
	,@Googleadr_address Varchar(500)
	,@GoogleName Varchar(500)
	,@GoogleRating Decimal(18,2)
	,@GoogleUser_ratings_total Int
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
		  ,[GoogleUser_ratings_total] = @GoogleUser_ratings_total		  
		  ,[IsPlaceDetailsDone] = 1		  
		  ,[PriceLevel] = @Pricelevel
	 WHERE AttractionsId = @AttractionsId




	INSERT INTO Attractions..[MasterGoogleType]
           ([GoogleTypeID]
           ,[TypeName]
           ,[IsNeeded])
	SELECT (SELECT ISNULL(MAX(GoogleTypeID),0) FROM  Attractions..MasterGoogleType)
			,Category
			,0
	FROM @Category
	WHERE Category NOT IN (SELECT TypeName FROM Attractions..MasterGoogleType)

	
	DELETE FROM [dbo].[AttractionXCategory]
    WHERE AttractionId = @AttractionsId	

	INSERT INTO [dbo].[AttractionXCategory]
           ([AttractionId]
           ,[CategoryId])

	SELECT 
			@AttractionsId
			,GoogleTypeID
	FROM Attractions..MasterGoogleType
	WHERE TypeName IN (SELECT Category FROM @Category)



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
           ,[CreatedDate]
           ,[IsGoogleCreated])
     SELECT @AttractionsId
			,Rating
			,Author_name
			,Author_url
			,[Language]
			,Profile_photo_url
			,[Text]
			,CreatedDate
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
