CREATE PROCEDURE Service_GetAttractionRestarentMissing 
	
AS
BEGIN
	SELECT A.[AttractionsId]
		  ,[AttractionName]
		  ,[AddressOne]
		  ,[AddressTwo]
		  ,[CityId]
		  ,[CategoryId]
		  ,[Longitude]
		  ,[Latitude]
		  ,[PlaceId]
		  ,[RankId]
		  ,A.[CreatedDate]
		  ,[CreatedBy]
		  ,[ModifiedDate]
		  ,[ModifiedBy]
		  ,[GoogleSearchText]
		  ,[GoogleWebSite]
		  ,[GoogleICon]
		  ,[GoogleInternational_phone_number]
		  ,[Googleadr_address]
		  ,[GoogleName]
		  ,[IsScannedNearBy]
		  ,[IsPlaceDetailsDone]
		  ,[IsNearDistanceDone]
		  ,[PriceLevel]
		  ,[GoogleRating]
		  ,[GoogleUser_ratings_total]
		  ,[IsGoogleSearchTextDone]
		  ,[Utc_offset]
		  ,[IsNearRestarentDone]
	  FROM [dbo].[Attractions] A WITH(NOLOCK)
	  WHERE IsNULL(IsNearRestarentDone,0) = 0



END