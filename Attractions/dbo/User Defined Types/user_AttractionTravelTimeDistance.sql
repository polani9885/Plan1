CREATE TYPE [dbo].[user_AttractionTravelTimeDistance] AS TABLE(
	[SourceAttractionId] [int] NULL,
	[DestinationAttractionId] [int] NULL,
	[TravelModeId] [int] NULL,
	[TravelTime] [int] NULL,
	[Distance] [int] NULL
)