CREATE PROCEDURE [dbo].[AttractionsCheckExists] 
(
	@AttractionsId INT
	,@CityId int
	,@AttractionName varchar(250)
)	
AS
BEGIN
	IF(@CityId = 0)
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
		WHERE AttractionName = @AttractionName
		
	END
	ELSE
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
		WHERE AttractionName = @AttractionName
		AND AttractionsId NOT IN (@AttractionsId)		
	END
END

GO