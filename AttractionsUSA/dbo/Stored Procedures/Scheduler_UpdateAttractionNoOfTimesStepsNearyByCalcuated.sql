CREATE PROCEDURE Scheduler_UpdateAttractionNoOfTimesStepsNearyByCalcuated
(
	@AttractionTravelStepsId BIGINT
)	
AS
BEGIN
	
	UPDATE dbo.AttractionNoOfTimesStepsNearyByCalcuated
		SET NoOfTimesTried = ISNULL(NoOfTimesTried,0) + 1
	WHERE AttractionTravelStepsId = @AttractionTravelStepsId	
	
END