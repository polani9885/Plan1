CREATE TYPE [dbo].[userTable_OrderAttraction] AS TABLE(
	[OrderNumber] [int] IDENTITY(1,1) NOT NULL,
	[SourceAttractionId] [int] NULL,
	[DestinationAttractionId] [int] NULL,
	[Distance] [int] NULL,
	[TravelTime] [int] NULL,
	[TravelModeId] [int] NULL,
	[SourceAttractionName] [varchar](500) NULL,
	[DestinationAttractionName] [varchar](500) NULL,
	[DateAndTime] [datetime] NULL,
	[ReachTime] [datetime] NULL,
	[TimeRequiredToView] [int] NULL,
	[ViewTime] [datetime] NULL
)
GO