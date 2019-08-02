CREATE TABLE [dbo].[AttractionXCategory](
	[AttractionXCategoryId] [int] IDENTITY(1,1) NOT NULL,
	[AttractionId] [int] NULL,
	[CategoryId] [int] NULL,
 [MapsXCategoryXMasterGoogleTypeId] INT NULL, 
    [CreatedDate] DATETIME NULL, 
    CONSTRAINT [PK_AttractionXCategory] PRIMARY KEY CLUSTERED 
(
	[AttractionXCategoryId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]