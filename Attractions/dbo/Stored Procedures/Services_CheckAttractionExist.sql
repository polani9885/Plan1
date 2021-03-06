﻿CREATE PROCEDURE [dbo].[Services_CheckAttractionExist] 
	@GoogleSearchText Varchar(250)
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
	WHERE GoogleSearchText = @GoogleSearchText
END