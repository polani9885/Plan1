CREATE TYPE [dbo].[UserTable_UpdatedBreaks] AS TABLE(
	[RequestDate] [date] NULL,
	[IsUserInterestedDayBreak] [bit] NULL,
	[UpdateDayEndTime] [time](7) NULL,
	[UpdateDayStartTime] [time](7) NULL,
	[IsUserInterestedLunchBreak] [bit] NULL,
	[UpdatedLunchTime] [time](7) NULL,
	[UpdatedLunchMinimumTime] [time](7) NULL,
	[IsUserInterestedBreak] [bit] NULL,
	[UpdatedBreakTime] [time](7) NULL,
	[UpdatedBreakMinimumTime] [time](7) NULL,
	[IsUserInterestedDinnerBreak] [bit] NULL,
	[UpdatedDinnerTime] [time](7) NULL,
	[UpdateDinnerMinimumTime] [time](7) NULL
)