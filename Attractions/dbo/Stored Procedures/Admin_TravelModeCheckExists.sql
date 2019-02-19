CREATE PROCEDURE [dbo].[Admin_TravelModeCheckExists] 
(
	@TravelModeId int
	,@TravelType varchar(250)   
)	
AS
BEGIN
	IF(@TravelModeId = 0)
	BEGIN
		SELECT MTM.TravelModeId
		  ,MTM.TravelType		  
		FROM [dbo].[MasterTravelMode] MTM WITH(NOLOCK)		
		WHERE MTM.TravelType = @TravelType
		
	END
	ELSE
	BEGIN
		SELECT MTM.TravelModeId
		  ,MTM.TravelType		  	  
		FROM [dbo].[MasterTravelMode] MTM WITH(NOLOCK)		
		WHERE MTM.TravelModeId NOT IN (@TravelModeId)
		AND MTM.TravelType = @TravelType		
	END
END