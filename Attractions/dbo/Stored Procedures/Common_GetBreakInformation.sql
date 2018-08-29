CREATE PROCEDURE Common_GetBreakInformation 
	
AS
BEGIN
	SELECT [BreakInformationId]
      ,[BreakType]
      ,CAST([StartTime] AS Varchar(8)) StartTime
      ,CAST([MinimumTime] AS Varchar(8)) MinimumTime
      ,[Display]
      ,CAST([EndTime] AS Varchar(8)) EndTime
  FROM [dbo].[BreakInformation] WITH(NOLOCK)
END
