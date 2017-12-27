CREATE TABLE [dbo].[MissingDistanceAttractionsRecords](
	[MissingDistanceAttractionsRecordsID] [int] IDENTITY(1,1) NOT NULL,
	[AttractionsID] [int] NULL,
	[MasterTravelModeID] [int] NULL,
	[CreatedDate] [datetime] NULL,
	[CreatedBy] [varchar](250) NULL,
	[ModifiedDate] [datetime] NULL,
	[ModifiedBy] [varchar](250) NULL,
 CONSTRAINT [PK_MissingDistanceAttractionsRecords] PRIMARY KEY CLUSTERED 
(
	[MissingDistanceAttractionsRecordsID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO



ALTER TABLE [dbo].[MissingDistanceAttractionsRecords]  WITH CHECK ADD  CONSTRAINT [FK_MissingDistanceAttractionsRecords_Attractions] FOREIGN KEY([AttractionsID])
REFERENCES [dbo].[Attractions] ([AttractionsId])
GO

ALTER TABLE [dbo].[MissingDistanceAttractionsRecords] CHECK CONSTRAINT [FK_MissingDistanceAttractionsRecords_Attractions]
GO
