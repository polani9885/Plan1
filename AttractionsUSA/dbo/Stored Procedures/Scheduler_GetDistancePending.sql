CREATE PROCEDURE [dbo].[Scheduler_GetDistancePending]
	
AS
BEGIN
	SELECT [AttractionsId]
      ,[AttractionName]      
      ,[CityId]      
      ,[Longitude]
      ,[Latitude]      
      ,[RankId]
      ,[CreatedDate]
      ,[CreatedBy]
      ,[ModifiedDate]
      ,[ModifiedBy]
      ,[SearchAddress]
      ,[WebSite]      
      ,[phone_number]            
      ,[IsScannedNearBy]
      ,[IsPlaceDetailsDone]
      ,[IsNearDistanceDone]
      ,[PriceLevel]
      ,[Rating]
  FROM [dbo].[Attractions]
  WHERE ISNULL(IsNearDistanceDone,0) = 0
  AND Longitude IS NOT NULL
  AND Latitude Is NOT NULL
  AND SearchAddress IS NOT NULL
  AND SearchAddress <> ''

END