CREATE PROCEDURE [dbo].[Admin_MasterBreakInfoUpdate] 
(
	@BreakInformationId int
	,@BreakType varchar(250)   
	,@StartTime Varchar(50) 
	,@MinimumTime Varchar(50)
	,@Display Varchar(50)
	,@EndTime Varchar(50)

)	
AS
BEGIN
	IF((SELECT 1 FROM BreakInformation WHERE BreakInformationId = @BreakInformationId) = 1)
	BEGIN	

		UPDATE [dbo].BreakInformation
		   SET BreakType = @BreakType
				,StartTime = CAST(@StartTime AS TIME)
				,MinimumTime = CAST(@MinimumTime AS TIME)
				,Display = @Display
				,EndTime = CAST(@EndTime AS TIME)
		 WHERE BreakInformationId = @BreakInformationId

		 
	END
	ELSE
	BEGIN

		INSERT INTO [dbo].[BreakInformation]
			   (BreakInformationId
			   ,BreakType
			   ,StartTime
			   ,MinimumTime
			   ,Display
			   ,EndTime
			   )
		 VALUES
			   ((SELECT ISNULL(MAX(BreakInformationId),0) + 1 FROM BreakInformation)
			   ,@BreakType
			   ,CAST(@StartTime As TIME)
			   ,CAST(@MinimumTime AS TIME) 
			   ,@Display
			   ,CAST(@EndTime AS TIME)
			   )

	END

	

END