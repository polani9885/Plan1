CREATE PROCEDURE [dbo].[Admin_MasterWeekGet]
	
AS
BEGIN
	SELECT 
		MW.MasterWeekId
		,MW.WeekName		
	FROM [dbo].[MasterWeek] MW
END