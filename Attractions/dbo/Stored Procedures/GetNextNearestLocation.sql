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
	,@UpdatedOrderAttraction parameter_OrderAttraction ReadOnly
AS
BEGIN


DECLARE @ListDestinationAttractions AS userTable_OnlyId 

INSERT INTO @ListDestinationAttractions
SELECT * FROM @DestinationAttractions

IF (	(SELECT Count(1) FROM @UpdatedOrderAttraction
			WHERE UpdatedOrder = (SELECT Count(*) FROM @OrderAttraction)
		) = 1
	)
BEGIN
	DELETE FROM @ListDestinationAttractions
	INSERT INTO @ListDestinationAttractions
	SELECT DestinationAttractionId FROM @UpdatedOrderAttraction 
	WHERE UpdatedOrder = (SELECT Count(*) FROM @OrderAttraction)
END			

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
		--Updating the View Time as customer modified
		,
		CASE WHEN 
			(SELECT COUNT(1) FROM @UpdatedOrderAttraction UOA
			WHERE UOA.DestinationAttractionId = S.DestinationAttractionId
			AND UOA.UpdatedTime is Not Null) = 1
		THEN
			CAST(DateADD(minute,
							(SELECT TOP 1 datediff(minute, 0, UOA.UpdatedTime) 
								FROM @UpdatedOrderAttraction UOA 
								WHERE UOA.DestinationAttractionId = S.DestinationAttractionId 
								AND UOA.UpdatedTime is Not Null
							)
							,@StartDateAndTime
						) AS DATETIME)
			
		ELSE
			CASE WHEN					 
					(SELECT COUNT(1) FROM AttractionAverageTime 
				WHERE AttractionsId = S.DestinationAttractionId) = 0
				THEN 
					CAST(DateADD(hh,@DefaultVisitTime,DateADD(ss,S.TravelTime,@StartDateAndTime)) AS DATETIME)
				ELSE				
					CAST(DateADD(hh,(SELECT TOP 1 AverageTime FROM AttractionAverageTime 
					WHERE AttractionsId = S.DestinationAttractionId),@StartDateAndTime) AS DATETIME)
				END 
		END
		AS  'ViewTime'	
	FROM 
	(
		select *,
		row_number() over (PARTITION BY SourceAttractionId order by Distance asc )RN
		from AttractionTravelTimeDistance 
		WHERE TravelModeId = @TravelModeId
		AND SourceAttractionId = @SourceAttractionID
		AND DestinationAttractionId IN (SELECT ID FROM @ListDestinationAttractions)
		--AND DestinationAttractionId NOT IN (SELECT DestinationAttractionId FROM @OrderAttraction)
		--AND DestinationAttractionId <> @DestinationAttractionID
		--AND DestinationAttractionId NOT IN (SELECT SourceAttractionId FROM @OrderAttraction)
	)S
	JOIN Attractions ATS ON ATS.AttractionsId = S.SourceAttractionId
	JOIN Attractions ATD ON ATD.AttractionsId = S.DestinationAttractionId
	WHERE RN =1 	


	



END
