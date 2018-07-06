CREATE TABLE [dbo].[AttractionPhotos](
	[AttractionPhotosId] [int] IDENTITY(1,1) NOT NULL,
	[AttractionId] [int] NULL,
	[Height] [int] NULL,
	[Html_attributions] [varchar](500) NULL,
	[Width] [int] NULL,
 [Photo_reference] VARCHAR(MAX) NULL, 
    [PhotoURL] VARCHAR(MAX) NULL, 
    [IsTried] BIT NULL, 
    CONSTRAINT [PK_AttractionPhotos] PRIMARY KEY CLUSTERED 
(
	[AttractionPhotosId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

