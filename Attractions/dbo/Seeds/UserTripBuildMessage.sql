IF(SELECT Count(1) FROM dbo.UserTripBuildMessage WITH(NOLOCK) WHERE UserTripBuildMessageId = 1) < 1
BEGIN	
	INSERT INTO [dbo].[UserTripBuildMessage]
           ([UserTripBuildMessageId]
           ,[BuildMessage]
           ,[Message])
     VALUES
           (1
           ,'Missing Distance Calculation'
           ,'Still Calculating Missing Distance')
END

GO

IF(SELECT Count(1) FROM dbo.UserTripBuildMessage WITH(NOLOCK) WHERE UserTripBuildMessageId = 2) < 1
BEGIN	
	INSERT INTO [dbo].[UserTripBuildMessage]
           ([UserTripBuildMessageId]
           ,[BuildMessage]
           ,[Message])
     VALUES
           (2
           ,'Lunch not setup'
           ,'<date> Lunch is not selected')
END

GO

IF(SELECT Count(1) FROM dbo.UserTripBuildMessage WITH(NOLOCK) WHERE UserTripBuildMessageId = 3) < 1
BEGIN	
	INSERT INTO [dbo].[UserTripBuildMessage]
           ([UserTripBuildMessageId]
           ,[BuildMessage]
           ,[Message])
     VALUES
           (3
           ,'Dinner not setup'
           ,'<date> Dinner is not selected')
END

GO

IF(SELECT Count(1) FROM dbo.UserTripBuildMessage WITH(NOLOCK) WHERE UserTripBuildMessageId = 4) < 1
BEGIN	
	INSERT INTO [dbo].[UserTripBuildMessage]
           ([UserTripBuildMessageId]
           ,[BuildMessage]
           ,[Message])
     VALUES
           (4
           ,'Day break not setup'
           ,'<date> Day break is not selected')
END

GO

IF(SELECT Count(1) FROM dbo.UserTripBuildMessage WITH(NOLOCK) WHERE UserTripBuildMessageId = 5) < 1
BEGIN	
	INSERT INTO [dbo].[UserTripBuildMessage]
           ([UserTripBuildMessageId]
           ,[BuildMessage]
           ,[Message])
     VALUES
           (5
           ,'Break not setup'
           ,'<date> Break is not selected')
END