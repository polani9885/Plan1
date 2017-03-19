CREATE TYPE [dbo].[user_AttractionsActiveStatus] AS TABLE(
	[AttractionsId] [int] NULL,
	[OpenTime] [time](7) NULL,
	[CloseTime] [time](7) NULL,
	[MasterWeekId] [int] NULL
)