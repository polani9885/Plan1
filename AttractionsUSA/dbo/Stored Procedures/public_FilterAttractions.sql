-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[public_FilterAttractions]
	@CityVisitList CityVisitList ReadOnly	
AS
BEGIN



	SELECT [AttractionsId]
      ,[AttractionName]
      ,[AddressOne]
      ,[AddressTwo]
	  ,A.GoogleInternational_phone_number
	  ,A.GoogleRating
	  ,A.PriceLevel
      ,A.[CityId]
      ,AC.[CategoryId]
      ,[Longitude]
      ,[Latitude]
      ,[PlaceId]
      ,[RankId]
      ,[CreatedDate]
      ,[CreatedBy]
      ,[ModifiedDate]
      ,[ModifiedBy]
	  ,GoogleSearchText
	  ,C.RecordIndex
  FROM [dbo].[Attractions] A
  JOIN dbo.AttractionXCategory AC WITH(NOLOCK) ON AC.AttractionId = A.AttractionsId  
  JOIN @CityVisitList C ON C.CityId = A.CityId
  WHERE 
  A.CityId = C.CityId
  AND GoogleSearchText IS NOT NULL  
  ORDER BY C.RecordIndex

  



END

