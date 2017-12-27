-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[public_FilterAttractions]
	@EnterLocationName Varchar(250),
	@CityVisitList CityVisitList ReadOnly,
	@CategoryID userTable_Category ReadOnly 
AS
BEGIN



	SELECT [AttractionsId]
      ,[AttractionName]
      ,[AddressOne]
      ,[AddressTwo]
      ,A.[CityId]
      ,[CategoryId]
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
  JOIN dbo.AttractionXMasterGoogleType AMGT ON AMGT.AttractionId = A.AttractionsId
  JOIN Attractions.dbo.MasterGoogleType MGT ON MGT.GoogleTypeID = AMGT.GoogleTypeId
  JOIN @CityVisitList C ON C.CityId = A.CityId
  WHERE 
  AMGT.GoogleTypeId NOT IN (SELECT CategoryID FROM @CategoryID)
  AND 
  A.CityId = C.CityId
  AND GoogleSearchText IS NOT NULL
  AND MGT.IsNeeded = 1	
  ORDER BY C.RecordIndex

  



END

