CREATE PROCEDURE [dbo].[Service_GetSearchTextNotCorrect] 
	
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
		  ,[IsUserPersonalRequest]
	  FROM [dbo].[Attractions]
		WHERE GoogleSearchText IS NULL
		AND AttractionName  IS NOT NULL


END