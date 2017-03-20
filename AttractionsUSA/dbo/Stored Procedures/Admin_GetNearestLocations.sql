
CREATE PROCEDURE [dbo].[Admin_GetNearestLocations]
	
AS
BEGIN
	
SELECT AT.[AttractionsId]
      ,AT.[AttractionName]
      ,AT.[AddressOne]
      ,AT.[AddressTwo]
      ,AT.[CityId]
      ,AT.[CategoryId]
      ,AT.[Longitude]
      ,AT.[Latitude]
      ,AT.[PlaceId]
      ,AT.[RankId]
      ,AT.[CreatedDate]
      ,AT.[CreatedBy]
      ,AT.[ModifiedDate]
      ,AT.[ModifiedBy]
      ,AT.[GoogleSearchText]
      ,AT.[GoogleWebSite]
      ,AT.[GoogleICon]
      ,AT.[GoogleInternational_phone_number]
      ,AT.[Googleadr_address]
      ,AT.[GoogleName]
      ,AT.[GoogleRating]
      ,AT.[GoogleUser_ratings_total]
	  ,MC.CityName
	  ,MS.StateName
	  ,MCO.CountryName
  FROM [dbo].[Attractions] AT
  JOIN MasterCity MC ON MC.CityId = AT.CityId
  JOIN MasterState MS ON MS.StateId = MC.StateId
  JOIN MasterCountry MCO ON MCO.CountryId = MS.CountryId
  WHERE AT.PlaceId IS NULL
  OR AT.PlaceId = ''
  OR AT.Longitude IS NULL
  OR AT.Longitude = ''
  OR AT.Latitude IS NULL
  OR AT.Latitude = ''


END

