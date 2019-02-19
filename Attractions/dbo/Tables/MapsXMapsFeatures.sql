CREATE TABLE [dbo].[MapsXMapsFeatures](
	[MapsXMapsFeaturesId] [int] IDENTITY(1,1) NOT NULL,
	[MaspId] [int] NULL,
	[MapFeaturesId] [int] NULL,
 CONSTRAINT [PK_MapsXMapsFeatures] PRIMARY KEY CLUSTERED 
(
	[MapsXMapsFeaturesId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

ALTER TABLE [dbo].[MapsXMapsFeatures]  WITH CHECK ADD  CONSTRAINT [FK_MapsXMapsFeatures_MapFeatures] FOREIGN KEY([MapFeaturesId])
REFERENCES [dbo].[MapFeatures] ([MapFeaturesId])
GO

ALTER TABLE [dbo].[MapsXMapsFeatures] CHECK CONSTRAINT [FK_MapsXMapsFeatures_MapFeatures]
GO

ALTER TABLE [dbo].[MapsXMapsFeatures]  WITH CHECK ADD  CONSTRAINT [FK_MapsXMapsFeatures_Maps] FOREIGN KEY([MaspId])
REFERENCES [dbo].[Maps] ([MapsId])
GO

ALTER TABLE [dbo].[MapsXMapsFeatures] CHECK CONSTRAINT [FK_MapsXMapsFeatures_Maps]
GO
