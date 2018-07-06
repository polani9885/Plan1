CREATE TABLE [dbo].[AttractionNoOfTimesDistanceCalcuated](
	[AttractionNoOfTimesDistanceCalcuatedId] [bigint] IDENTITY(1,1) NOT NULL,
	[SourceAttractionId] [int] NULL,
	[DestinationAttractionId] [int] NULL,
	[NoOfTimesTried] [int] NULL,
	[CreatedDate] [datetime] NULL,
	[ModifiedDate] [datetime] NULL,
 [TravelModeId] INT NULL, 
    CONSTRAINT [PK_AttractionNoOfTimesDistanceCalcuated] PRIMARY KEY CLUSTERED 
(
	[AttractionNoOfTimesDistanceCalcuatedId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

ALTER TABLE [dbo].[AttractionNoOfTimesDistanceCalcuated]  WITH CHECK ADD  CONSTRAINT [FK_AttractionNoOfTimesDistanceCalcuated_Attractions] FOREIGN KEY([SourceAttractionId])
REFERENCES [dbo].[Attractions] ([AttractionsId])
GO

ALTER TABLE [dbo].[AttractionNoOfTimesDistanceCalcuated] CHECK CONSTRAINT [FK_AttractionNoOfTimesDistanceCalcuated_Attractions]
GO

ALTER TABLE [dbo].[AttractionNoOfTimesDistanceCalcuated]  WITH CHECK ADD  CONSTRAINT [FK_AttractionNoOfTimesDistanceCalcuated_Attractions1] FOREIGN KEY([DestinationAttractionId])
REFERENCES [dbo].[Attractions] ([AttractionsId])
GO

ALTER TABLE [dbo].[AttractionNoOfTimesDistanceCalcuated] CHECK CONSTRAINT [FK_AttractionNoOfTimesDistanceCalcuated_Attractions1]
GO