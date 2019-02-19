CREATE PROCEDURE Scheduler_UpdateAttractionNoOfTimesStepsNearyByCalcuated
(
	@AttractionTravelStepsId BIGINT
)	
AS
BEGIN
	
	If EXISTS (SELECT 1 FROM dbo.AttractionNoOfTimesStepsNearyByCalcuated WITH(NOLOCK) WHERE AttractionTravelStepsId = @AttractionTravelStepsId)
	BEGIN	

		UPDATE dbo.AttractionNoOfTimesStepsNearyByCalcuated
			SET NoOfTimesTried = ISNULL(NoOfTimesTried,0) + 1
		WHERE AttractionTravelStepsId = @AttractionTravelStepsId	
	END
	ELSE
	BEGIN
		INSERT INTO dbo.AttractionNoOfTimesStepsNearyByCalcuated(AttractionTravelStepsId,NoOfTimesTried)
		VALUES(@AttractionTravelStepsId,1)
	END
	
END
