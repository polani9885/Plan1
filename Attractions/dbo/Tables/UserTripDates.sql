
CREATE TABLE [dbo].[UserTripDates](
	[UserTripDatesId] [int] IDENTITY(1,1) NOT NULL,
	[UserTripId] [int] NULL,
	[TripDate] [date] NULL,
	[CreatedDate] [datetime] NULL,
	[ModifiedDate] [datetime] NULL,
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
	[UpdateDinnerMinimumTime] [time](7) NULL,
	[DayBreakAttractionId] [bigint] NULL,
	[LunchBreakAttractionId] [bigint] NULL,
	[BreakAttractionId] [bigint] NULL,
	[DinnerAttractionId] [bigint] NULL,
 CONSTRAINT [PK_UserTripDates] PRIMARY KEY CLUSTERED 
(
	[UserTripDatesId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

ALTER TABLE [dbo].[UserTripDates]  WITH CHECK ADD  CONSTRAINT [FK_UserTripDates_UserTrip] FOREIGN KEY([UserTripId])
REFERENCES [dbo].[UserTrip] ([UserTripId])
GO

ALTER TABLE [dbo].[UserTripDates] CHECK CONSTRAINT [FK_UserTripDates_UserTrip]
GO

