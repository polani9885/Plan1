CREATE TABLE [dbo].[MissingDistanceAttractionsRecordsXAttractions](
	[MissingDistanceAttractionsRecordsXAttractionsID] [int] IDENTITY(1,1) NOT NULL,
	[AttractionsID] [int] NULL,
	[MissingDistanceAttractionsRecordsID] [int] NULL,
	[IsTaken] [bit] NULL,
	[IsResolved] [bit] NULL,
	[CreatedDate] [datetime] NULL,
	[CreatedBy] [varchar](250) NULL,
	[ModifiedDate] [datetime] NULL,
	[ModifedBy] [varchar](250) NULL,
 CONSTRAINT [PK_MissingDistanceAttractionsRecordsXAttractions] PRIMARY KEY CLUSTERED 
(
	[MissingDistanceAttractionsRecordsXAttractionsID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO



ALTER TABLE [dbo].[MissingDistanceAttractionsRecordsXAttractions]  WITH CHECK ADD  CONSTRAINT [FK_MissingDistanceAttractionsRecordsXAttractions_MissingDistanceAttractionsRecords] FOREIGN KEY([MissingDistanceAttractionsRecordsID])
REFERENCES [dbo].[MissingDistanceAttractionsRecords] ([MissingDistanceAttractionsRecordsID])
GO

ALTER TABLE [dbo].[MissingDistanceAttractionsRecordsXAttractions] CHECK CONSTRAINT [FK_MissingDistanceAttractionsRecordsXAttractions_MissingDistanceAttractionsRecords]
GO