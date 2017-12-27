CREATE TYPE [dbo].[user_WeekDaysOpenClose] AS TABLE(
	[WeekdayId] [int] NULL,
	[OpenTime] [varchar](50) NULL,
	[CloseTime] [varchar](50) NULL
)
GO