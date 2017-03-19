CREATE TABLE [dbo].[UserAttractionsVisit](
	[UserAttractionsVisitId] [int] IDENTITY(1,1) NOT NULL,
	[UserAttractionId] [int] NULL,
	[SourceAttractionId] [int] NULL,
	[DestinationAttractionId] [int] NULL,
	[TravelModeId] [int] NULL,
	[TravelTime] [int] NULL,
	[Distance] [int] NULL,
	[CreatedUTCDate] [datetime] NULL,
	[CreatedBy] [varchar](250) NULL,
	[ModifiedUTCDate] [datetime] NULL,
	[ModifiedBy] [varchar](250) NULL,
 CONSTRAINT [PK_UserAttractionsVisit] PRIMARY KEY CLUSTERED 
(
	[UserAttractionsVisitId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
