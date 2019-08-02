CREATE TABLE [dbo].[MapsXAPIXFeature](
	[MapsXAPIXFeatureId] [int] IDENTITY(1,1) NOT NULL,
	[MapsId] [int] NULL,
	[MapFeaturesId] [int] NULL,
	[MasterCountryId] [int] NULL,
	[API] [varchar](2000) NULL,
 CONSTRAINT [PK_MapsXAPIXFeature] PRIMARY KEY CLUSTERED 
(
	[MapsXAPIXFeatureId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO


ALTER TABLE [dbo].[MapsXAPIXFeature]  WITH CHECK ADD  CONSTRAINT [FK_MapsXAPIXFeature_MapFeatures] FOREIGN KEY([MapFeaturesId])
REFERENCES [dbo].[MapFeatures] ([MapFeaturesId])
GO

ALTER TABLE [dbo].[MapsXAPIXFeature] CHECK CONSTRAINT [FK_MapsXAPIXFeature_MapFeatures]
GO

ALTER TABLE [dbo].[MapsXAPIXFeature]  WITH CHECK ADD  CONSTRAINT [FK_MapsXAPIXFeature_Maps] FOREIGN KEY([MapsId])
REFERENCES [dbo].[Maps] ([MapsId])
GO

ALTER TABLE [dbo].[MapsXAPIXFeature] CHECK CONSTRAINT [FK_MapsXAPIXFeature_Maps]
GO

ALTER TABLE [dbo].[MapsXAPIXFeature]  WITH CHECK ADD  CONSTRAINT [FK_MapsXAPIXFeature_MasterCountry] FOREIGN KEY([MasterCountryId])
REFERENCES [dbo].[MasterCountry] ([CountryId])
GO

ALTER TABLE [dbo].[MapsXAPIXFeature] CHECK CONSTRAINT [FK_MapsXAPIXFeature_MasterCountry]
GO

