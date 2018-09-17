CREATE TYPE [dbo].[user_OrderOfAttractionVisit] AS TABLE(
	[RecordCount] [int] NULL,
	[SourceAttractionId] [int] NULL,
	[DestinationAttractionId] [int] NULL,
	[Distance] [int] NULL,
	[TravelTime] [int] NULL,
	[TravelModeId] [int] NULL,
	[SourceAttractionName] [varchar](500) NULL,
	[DestinationAttractionName] [varchar](500) NULL,
	[DateAndtime] [datetime] NULL,
	[ReachTime] [datetime] NULL,
	[TimeRequiredToView] [time](7) NULL,
	[EventEndTime] [datetime] NULL,
	[IsLunchDinnerBreakTime] [int] NULL,
	[IsDistanceCalculationMissing] [bit] NULL,
	[WeekDayId] [int] NULL,
	[BreakInformationId] [int] NULL
)
GO