CREATE TABLE [dbo].[MasterCategoryXMasterGoogleType](
	[MasterCategoryXMasterGoogleTypeId] [int] IDENTITY(1,1) NOT NULL,
	[MasterCategoryId] [int] NULL,
	[MasterGoogleTypeId] [nchar](10) NULL,
 CONSTRAINT [PK_MasterCategoryXMasterGoogleType] PRIMARY KEY CLUSTERED 
(
	[MasterCategoryXMasterGoogleTypeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]