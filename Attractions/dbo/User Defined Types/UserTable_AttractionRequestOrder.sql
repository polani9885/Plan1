CREATE TYPE [dbo].[UserTable_AttractionRequestOrder] AS TABLE(
	[AttractionId] [int] NULL,
	[OrderNumber] [int] NULL,
	StayTime Varchar(20),
	IsRequestedAfterBreakFast bit,
	IsRequestedAfterLunch bit,
	IsRequestedAfterBreak bit,
	IsRequestedAfterDinner bit
)