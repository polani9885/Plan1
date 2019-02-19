CREATE PROCEDURE [dbo].[Admin_BreakInformationCheckExists] 
(
	@BreakInformationId int
	,@BreakType varchar(250)   
)	
AS
BEGIN
	IF(@BreakInformationId = 0)
	BEGIN
		SELECT BI.BreakInformationId
		  ,BI.BreakType		  
		FROM [dbo].[BreakInformation] BI		
		WHERE BI.BreakType = @BreakType
		
	END
	ELSE
	BEGIN
		SELECT BI.BreakInformationId
		  ,BI.BreakType		  	  
		FROM [dbo].[BreakInformation] BI		
		WHERE BI.BreakInformationId NOT IN (@BreakInformationId)
		AND BI.BreakType = @BreakType		
	END
END