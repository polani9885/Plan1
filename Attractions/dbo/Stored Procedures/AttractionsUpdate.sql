Create PROCEDURE [dbo].[AttractionsUpdate] 
(
	@AttractionsId INT
	,@AttractionName varchar(500)
	,@AddressOne varchar(500)
	,@AddressTwo varchar(500)
	,@CityId int
	,@CategoryId int
	,@Longitude varchar(250)
	,@Latitude varchar(250)
	,@PlaceId varchar(250)
	,@RankId int
	,@CreatedBy varchar(250)	
	,@GoogleSearchText varchar(500)
	,@GoogleWebSite varchar(500)
	,@GoogleICon varchar(500)
	,@GoogleInternational_phone_number varchar(500)
	,@Googleadr_address varchar(2000)
	,@GoogleName varchar(500)
	,@GoogleRating varchar(50)
	,@GoogleUser_ratings_total int
)	
AS
BEGIN
	IF((SELECT 1 FROM Attractions WHERE AttractionsId = @AttractionsId) = 1)
	BEGIN			

		UPDATE [dbo].[Attractions]
		   SET [AttractionName] = @AttractionName
			  ,[AddressOne] = @AddressOne
			  ,[AddressTwo] = @AddressTwo
			  ,[CityId] = @CityId
			  ,[CategoryId] = @CategoryId
			  ,[Longitude] = @Longitude
			  ,[Latitude] = @Latitude
			  ,[PlaceId] = @PlaceId
			  ,[RankId] = @RankId			  
			  ,[ModifiedDate] = getdate()
			  ,[ModifiedBy] = @CreatedBy
			  ,[GoogleSearchText] = @GoogleSearchText
			  ,[GoogleWebSite] = @GoogleWebSite
			  ,[GoogleICon] = @GoogleICon
			  ,[GoogleInternational_phone_number] = @GoogleInternational_phone_number
			  ,[Googleadr_address] = @Googleadr_address
			  ,[GoogleName] = @GoogleName
			  ,[GoogleRating] = @GoogleRating
			  ,[GoogleUser_ratings_total] = @GoogleUser_ratings_total
		 WHERE AttractionsId = @AttractionsId




		 
	END
	ELSE
	BEGIN

		

		INSERT INTO [dbo].[Attractions]
				   ([AttractionName]
				   ,[AddressOne]
				   ,[AddressTwo]
				   ,[CityId]
				   ,[CategoryId]
				   ,[Longitude]
				   ,[Latitude]
				   ,[PlaceId]
				   ,[RankId]
				   ,[CreatedDate]
				   ,[CreatedBy]				   
				   ,[GoogleSearchText]
				   ,[GoogleWebSite]
				   ,[GoogleICon]
				   ,[GoogleInternational_phone_number]
				   ,[Googleadr_address]
				   ,[GoogleName]
				   ,[GoogleRating]
				   ,[GoogleUser_ratings_total])
			 VALUES
				   (@AttractionName
				   ,@AddressOne
				   ,@AddressTwo
				   ,@CityId
				   ,@CategoryId
				   ,@Longitude
				   ,@Latitude
				   ,@PlaceId
				   ,@RankId
				   ,getdate()
				   ,@CreatedBy				   
				   ,@GoogleSearchText
				   ,@GoogleWebSite
				   ,@GoogleICon
				   ,@GoogleInternational_phone_number
				   ,@Googleadr_address 
				   ,@GoogleName
				   ,@GoogleRating
				   ,@GoogleUser_ratings_total)
	END	

END

GO