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
	[IsUserInterestedBreak] [bit] NULL,
	[UpdatedBreakTime] [time](7) NULL,
	[IsUserInterestedDinnerBreak] [bit] NULL,
	[UpdatedDinnerTime] [time](7) NULL,
	[IsBreakAdded] [bit] NULL,
	[BreakAttractionId] [bigint] NULL,
	[IsLunchAdded] [bit] NULL,
	[LunchAttractionId] [bigint] NULL,
	[IsDinnerAdded] [bit] NULL,
	[DinnerAttractionId] [bigint] NULL,
	[IsUserInterestedBreakFast] [bit] NULL,
	[UpdatedBreakFastTime] [time](7) NULL,
	[IsBreakFastAdded] [bit] NULL,
	[BreakFastAttractionId] [bigint] NULL,
	[IsDayBreakAdded] [bit] NULL,
	[DayBreakAttractionId] [bigint] NULL,
	[NoOfCars] [int] NULL,
	[AverageMileage] [int] NULL,
	[NoOfRooms] [int] NULL,
	[BreakFastExpense] [decimal](18, 2) NULL,
	[LunchExpense] [decimal](18, 2) NULL,
	[BreakExpense] [decimal](18, 2) NULL,
	[DayBreakExpense] [decimal](18, 2) NULL,
	[CarRentalExpense] [decimal](18, 2) NULL,
	[NoOfAttractions] [int] NULL,
	[Distance] [varchar](50) NULL,
	[DinnerExpense] [decimal](18, 2) NULL,
	[IsNoOfCarsUserUpdated] [bit] NULL,
	[IsAverageMileageUserUpdated] [bit] NULL,
	[IsCarRentalExpenseUserUpdated] [bit] NULL,
	[IsBreakFastExpenseUserUpdated] [bit] NULL,
	[IsLunchExpenseUserUpdated] [bit] NULL,
	[IsBreakExpenseUserUpdated] [bit] NULL,
	[IsDinnerExpenseUserUpdated] [bit] NULL,
	[IsDayBreakExpenseUserUpdated] [bit] NULL,
	[IsNoOfRoomsUserUpdated] [bit] NULL,
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