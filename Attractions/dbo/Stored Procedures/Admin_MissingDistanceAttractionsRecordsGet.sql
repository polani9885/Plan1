CREATE PROCEDURE [dbo].[Admin_MissingDistanceAttractionsRecordsGet] 
AS
BEGIN




SELECT [MissingDistanceAttractionsRecordsID]
      ,MDA.[AttractionsID]
      ,MDA.[MasterTravelModeID]
      ,MDA.[CreatedDate]
      ,MDA.[CreatedBy]
      ,MDA.[ModifiedDate]
      ,MDA.[ModifiedBy]
	  ,A.AttractionName
	  ,MTM.TravelType
  FROM [dbo].[MissingDistanceAttractionsRecords] MDA
  JOIN Attractions A ON A.AttractionsId = MDA.AttractionsID
  JOIN MasterTravelMode MTM ON MTM.TravelModeId = MDA.MasterTravelModeID




END