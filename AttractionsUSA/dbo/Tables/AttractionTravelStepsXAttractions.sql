CREATE TABLE [dbo].[AttractionTravelStepsXAttractions](
	[AttractionTravelStepsXAttractionsId] [int] IDENTITY(1,1) NOT NULL,
	[AttractionTravelStepsId] [bigint] NULL,
	[AttractionsId] [int] NULL,
 CONSTRAINT [PK_AttractionTravelStepsXAttractionsId] PRIMARY KEY CLUSTERED 
(
	[AttractionTravelStepsXAttractionsId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

ALTER TABLE [dbo].[AttractionTravelStepsXAttractions]  WITH CHECK ADD  CONSTRAINT [FK_AttractionTravelStepsXAttractionsId_Attractions] FOREIGN KEY([AttractionsId])
REFERENCES [dbo].[Attractions] ([AttractionsId])
GO

ALTER TABLE [dbo].[AttractionTravelStepsXAttractions] CHECK CONSTRAINT [FK_AttractionTravelStepsXAttractionsId_Attractions]
GO

ALTER TABLE [dbo].[AttractionTravelStepsXAttractions]  WITH CHECK ADD  CONSTRAINT [FK_AttractionTravelStepsXAttractionsId_AttractionTravelSteps] FOREIGN KEY([AttractionTravelStepsId])
REFERENCES [dbo].[AttractionTravelSteps] ([AttractionTravelStepsId])
GO

ALTER TABLE [dbo].[AttractionTravelStepsXAttractions] CHECK CONSTRAINT [FK_AttractionTravelStepsXAttractionsId_AttractionTravelSteps]
GO

