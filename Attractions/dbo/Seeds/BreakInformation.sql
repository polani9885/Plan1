IF NOT EXISTS (SELECT 1 FROM dbo.BreakInformation WITH(NOLOCK) WHERE BreakInformationId = 1) 
BEGIN

	INSERT INTO [dbo].[BreakInformation]
           ([BreakInformationId]
           ,[BreakType]
           ,[StartTime]
		   ,[EndTime]
           ,[MinimumTime]
           ,[Display])
     VALUES
           (1
           ,'Morning Break Fast'
           ,'09:30:00.0000000'
		   ,'01:00:00.0000000'
           ,'00:30:00.0000000'
           ,'Break Fast')

END

GO
IF NOT EXISTS (SELECT 1 FROM dbo.BreakInformation WITH(NOLOCK) WHERE BreakInformationId = 2) 
BEGIN

	INSERT INTO [dbo].[BreakInformation]
           ([BreakInformationId]
           ,[BreakType]
           ,[StartTime]
		   ,[EndTime]
           ,[MinimumTime]
           ,[Display])
     VALUES
           (2
           ,'Lunch'
           ,'12:00:00.0000000'
		   ,'02:00:00.0000000'
           ,'01:00:00.0000000'
           ,'Lunch Time')

END

GO
IF NOT EXISTS (SELECT 1 FROM dbo.BreakInformation WITH(NOLOCK) WHERE BreakInformationId = 3) 
BEGIN

	INSERT INTO [dbo].[BreakInformation]
           ([BreakInformationId]
           ,[BreakType]
           ,[StartTime]
		   ,[EndTime]
           ,[MinimumTime]
           ,[Display])
     VALUES
           (3
           ,'Evening Break Time'
           ,'17:00:00.0000000'
		   ,'02:00:00.0000000'
           ,'01:00:00.0000000'
           ,'Break Time')

END

GO
IF NOT EXISTS (SELECT 1 FROM dbo.BreakInformation WITH(NOLOCK) WHERE BreakInformationId = 4) 
BEGIN

	INSERT INTO [dbo].[BreakInformation]
           ([BreakInformationId]
           ,[BreakType]
           ,[StartTime]
		   ,[EndTime]
           ,[MinimumTime]
           ,[Display])
     VALUES
           (4
           ,'Dinner'
           ,'20:00:00.0000000'
		   ,'02:00:00.0000000'
           ,'01:00:00.0000000'
           ,'Dinner Time')

END

GO
IF NOT EXISTS (SELECT 1 FROM dbo.BreakInformation WITH(NOLOCK) WHERE BreakInformationId = 5) 
BEGIN

	INSERT INTO [dbo].[BreakInformation]
           ([BreakInformationId]
           ,[BreakType]
           ,[StartTime]
		   ,[EndTime]
           ,[MinimumTime]
           ,[Display])
     VALUES
           (5
           ,'Day Break'
           ,'20:00:00.0000000'
		   ,'03:00:00.0000000'
           ,'06:00:00.0000000'
           ,'Day Break')

END

GO
IF NOT EXISTS (SELECT 1 FROM dbo.BreakInformation WITH(NOLOCK) WHERE BreakInformationId = 6) 
BEGIN

	INSERT INTO [dbo].[BreakInformation]
           ([BreakInformationId]
           ,[BreakType]
           ,[StartTime]
		   ,[EndTime]
           ,[MinimumTime]
           ,[Display])
     VALUES
           (6
           ,'Extra Break'
           ,'00:00:00.0000000'
		   ,'00:00:00.0000000'
           ,'00:30:00.0000000'
           ,'Extra Break')

END