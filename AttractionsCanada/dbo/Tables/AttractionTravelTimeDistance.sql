CREATE TABLE [dbo].[AttractionTravelTimeDistance](
	[AttractionTravelTimeDistanceId] [int] IDENTITY(1,1) NOT NULL,
	[SourceAttractionId] [int] NULL,
	[DestinationAttractionId] [int] NULL,
	[TravelModeId] [int] NULL,
	[TravelTime] [int] NULL,
	[Distance] [int] NULL,
 CONSTRAINT [PK_AttractionTravelTimeDistance] PRIMARY KEY CLUSTERED 
(
	[AttractionTravelTimeDistanceId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

ALTER TABLE [dbo].[AttractionTravelTimeDistance]  WITH CHECK ADD  CONSTRAINT [FK_AttractionTravelTimeDistance_Attractions] FOREIGN KEY([SourceAttractionId])
REFERENCES [dbo].[Attractions] ([AttractionsId])
GO

ALTER TABLE [dbo].[AttractionTravelTimeDistance] CHECK CONSTRAINT [FK_AttractionTravelTimeDistance_Attractions]
GO