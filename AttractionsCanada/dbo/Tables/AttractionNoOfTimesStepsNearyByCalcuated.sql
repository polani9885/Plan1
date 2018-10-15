CREATE TABLE [dbo].[AttractionNoOfTimesStepsNearyByCalcuated](
	[AttractionNoOfTimesStepsNearyByCalcuatedId] [int] IDENTITY(1,1) NOT NULL,
	[AttractionTravelStepsId] [bigint] NULL,
	[NoOfTimesTried] [int] NULL,
 CONSTRAINT [PK_AttractionNoOfTimesStepsNearyByCalcuatedId] PRIMARY KEY CLUSTERED 
(
	[AttractionNoOfTimesStepsNearyByCalcuatedId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

ALTER TABLE [dbo].[AttractionNoOfTimesStepsNearyByCalcuated]  WITH CHECK ADD  CONSTRAINT [FK_AttractionNoOfTimesStepsNearyByCalcuatedId_AttractionTravelSteps] FOREIGN KEY([AttractionTravelStepsId])
REFERENCES [dbo].[AttractionTravelSteps] ([AttractionTravelStepsId])
GO

ALTER TABLE [dbo].[AttractionNoOfTimesStepsNearyByCalcuated] CHECK CONSTRAINT [FK_AttractionNoOfTimesStepsNearyByCalcuatedId_AttractionTravelSteps]
GO