CREATE TABLE [dbo].[AttractionAverageTime](
	[AttractionAverageTimeId] [int] IDENTITY(1,1) NOT NULL,
	[AttractionsId] [int] NULL,
	[AverageCost] [int] NULL,
	[AverageTime] [time](7) NULL,
 CONSTRAINT [PK_AttractionAverageTime] PRIMARY KEY CLUSTERED 
(
	[AttractionAverageTimeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

ALTER TABLE [dbo].[AttractionAverageTime]  WITH CHECK ADD  CONSTRAINT [FK_AttractionAverageTime_Attractions] FOREIGN KEY([AttractionsId])
REFERENCES [dbo].[Attractions] ([AttractionsId])
GO

ALTER TABLE [dbo].[AttractionAverageTime] CHECK CONSTRAINT [FK_AttractionAverageTime_Attractions]
GO
