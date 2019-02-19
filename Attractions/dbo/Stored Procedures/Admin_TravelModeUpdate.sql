CREATE PROCEDURE [dbo].[Admin_TravelModeUpdate] 
(
	@TravelModeId int
	,@TravelType varchar(250)

)	
AS
BEGIN
	IF((SELECT 1 FROM MasterTravelMode WITH(NOLOCK) WHERE TravelModeId = @TravelModeId) = 1)
	BEGIN	

		UPDATE [dbo].MasterTravelMode
		   SET TravelType = @TravelType				
		 WHERE TravelModeId = @TravelModeId

		 
	END
	ELSE
	BEGIN

		INSERT INTO [dbo].[MasterTravelMode]
			   (TravelModeId
			   ,TravelType			   
			   )
		 VALUES
			   ((SELECT ISNULL(MAX(TravelModeId),0) + 1 FROM MasterTravelMode WITH(NOLOCK))
			   ,@TravelType			   
			   )

	END

	

END