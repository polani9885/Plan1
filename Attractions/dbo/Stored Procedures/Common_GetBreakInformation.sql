CREATE PROCEDURE Common_GetBreakInformation 
	
AS
BEGIN
	SELECT [BreakInformationId]
      ,[BreakType]
      ,convert(varchar(5),StartTime,108) StartTime
      ,convert(varchar(5),MinimumTime,108) MinimumTime
      ,[Display]
      ,convert(varchar(5),EndTime,108) EndTime
  FROM [dbo].[BreakInformation] WITH(NOLOCK)
END
