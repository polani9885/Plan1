-- =============================================
-- Get the next attraction location information
-- =============================================
CREATE PROCEDURE [dbo].[GetNextNearestLocation]
	@TravelModeId INT
	,@SourceAttractionID INT
	,@DestinationAttractionID INT
	,@DestinationAttractions userTable_OnlyId ReadOnly
	,@OrderAttraction AS userTable_OrderAttraction ReadOnly
	,@StartDateAndTime DATETIME = NULL
	
AS
BEGIN

DECLARE @DefaultVisitTime INT = 2
	
	SELECT 		
		S.SourceAttractionId
		,S.DestinationAttractionId
		,S.Distance
		,S.TravelTime
		,S.TravelModeId
		,ATS.AttractionName AS 'SourceAttractionName'
		,ATD.AttractionName As 'DestinationAttractionName'
		,@StartDateAndTime AS 'DateAndTime'
		,DateADD(ss,S.TravelTime,@StartDateAndTime) AS 'ReachTime'
		,CASE WHEN 
				(SELECT COUNT(1) FROM AttractionAverageTime 
			WHERE AttractionsId = S.DestinationAttractionId) = 0
			THEN 
			 @DefaultVisitTime
			 ELSE
			 (SELECT TOP 1 AverageTime FROM AttractionAverageTime 
				WHERE AttractionsId = S.DestinationAttractionId)
			 END			
			AS 'TimeRequiredToView'
		,CASE WHEN 
				(SELECT COUNT(1) FROM AttractionAverageTime 
			WHERE AttractionsId = S.DestinationAttractionId) = 0
			THEN 
				CAST(DateADD(hh,@DefaultVisitTime,DateADD(ss,S.TravelTime,@StartDateAndTime)) AS DATETIME)
			ELSE				
				CAST( DateADD(hh,(SELECT TOP 1 AverageTime FROM AttractionAverageTime 
				WHERE AttractionsId = S.DestinationAttractionId),@StartDateAndTime) AS DATETIME)
			END 
			AS  'ViewTime'	
	FROM 
	(
		select *,
		row_number() over (PARTITION BY SourceAttractionId order by Distance asc )RN
		from AttractionTravelTimeDistance 
		WHERE TravelModeId = @TravelModeId
		AND SourceAttractionId = @SourceAttractionID
		AND DestinationAttractionId IN (SELECT ID FROM @DestinationAttractions)
		--AND DestinationAttractionId NOT IN (SELECT DestinationAttractionId FROM @OrderAttraction)
		--AND DestinationAttractionId <> @DestinationAttractionID
		--AND DestinationAttractionId NOT IN (SELECT SourceAttractionId FROM @OrderAttraction)
	)S
	JOIN Attractions ATS ON ATS.AttractionsId = S.SourceAttractionId
	JOIN Attractions ATD ON ATD.AttractionsId = S.DestinationAttractionId
	WHERE RN =1 	
END

