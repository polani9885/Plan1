CREATE TABLE [dbo].[MapsXCategoryXMasterGoogleType](
	[MapsXCategoryXMasterGoogleTypeId] [int] IDENTITY(1,1) NOT NULL,
	[MapsXCategoryId] [int] NULL,
	[MasterGoogleTypeId] [int] NULL,
 CONSTRAINT [PK_MapsXCategoryXMasterGoogleType] PRIMARY KEY CLUSTERED 
(
	[MapsXCategoryXMasterGoogleTypeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

ALTER TABLE [dbo].[MapsXCategoryXMasterGoogleType]  WITH CHECK ADD  CONSTRAINT [FK_MapsXCategoryXMasterGoogleType_MapsXCategory] FOREIGN KEY([MapsXCategoryId])
REFERENCES [dbo].[MapsXCategory] ([MapsXCategoryId])
GO

ALTER TABLE [dbo].[MapsXCategoryXMasterGoogleType] CHECK CONSTRAINT [FK_MapsXCategoryXMasterGoogleType_MapsXCategory]
GO

ALTER TABLE [dbo].[MapsXCategoryXMasterGoogleType]  WITH CHECK ADD  CONSTRAINT [FK_MapsXCategoryXMasterGoogleType_MasterGoogleType] FOREIGN KEY([MasterGoogleTypeId])
REFERENCES [dbo].[MasterGoogleType] ([GoogleTypeID])
GO

ALTER TABLE [dbo].[MapsXCategoryXMasterGoogleType] CHECK CONSTRAINT [FK_MapsXCategoryXMasterGoogleType_MasterGoogleType]
GO