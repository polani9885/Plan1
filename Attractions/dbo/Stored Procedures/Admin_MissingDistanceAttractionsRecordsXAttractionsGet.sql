CREATE PROCEDURE [dbo].[Admin_MissingDistanceAttractionsRecordsXAttractionsGet] 
(
	@MissingDistanceAttractionsRecordsID INT
)
AS
BEGIN





SELECT MAXA.[MissingDistanceAttractionsRecordsXAttractionsID]
      ,MAXA.[AttractionsID]
      ,MAXA.[MissingDistanceAttractionsRecordsID]
      ,MAXA.[IsTaken]
      ,MAXA.[IsResolved]
      ,MAXA.[CreatedDate]
      ,MAXA.[CreatedBy]
      ,MAXA.[ModifiedDate]
      ,MAXA.[ModifedBy]
	  ,A.AttractionName
	  ,AD.AttractionName AS DesinationAttractionName
  FROM [dbo].[MissingDistanceAttractionsRecordsXAttractions] MAXA
  JOIN MissingDistanceAttractionsRecords MDAR ON MDAR.MissingDistanceAttractionsRecordsID = MAXA.MissingDistanceAttractionsRecordsID
  JOIN Attractions A ON A.AttractionsId = MDAR.AttractionsID
  JOIN Attractions AD ON AD.AttractionsId = MAXA.AttractionsID
  WHERE MDAR.MissingDistanceAttractionsRecordsID = @MissingDistanceAttractionsRecordsID
  





END
