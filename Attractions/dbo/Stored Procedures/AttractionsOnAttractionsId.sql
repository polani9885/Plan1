CREATE PROCEDURE [dbo].[AttractionsOnAttractionsId] 
(
	@AttractionsId INT
)	
AS
BEGIN	

	SELECT [AttractionsId]
		  ,[AttractionName]
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
		  ,[ModifiedDate]
		  ,[ModifiedBy]
		  ,[GoogleSearchText]
		  ,[GoogleWebSite]
		  ,[GoogleICon]
		  ,[GoogleInternational_phone_number]
		  ,[Googleadr_address]
		  ,[GoogleName]
		  ,[GoogleRating]
		  ,[GoogleUser_ratings_total]
	  FROM [dbo].[Attractions]
		WHERE AttractionsId = @AttractionsId
END