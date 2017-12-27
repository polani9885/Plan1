CREATE TABLE [dbo].[AttractionXMasterGoogleType](
	[AttractionXMasterGoogleTypeID] [int] IDENTITY(1,1) NOT NULL,
	[AttractionId] [int] NULL,
	[GoogleTypeId] [int] NULL,
 CONSTRAINT [PK_AttractionXMasterGoogleType] PRIMARY KEY CLUSTERED 
(
	[AttractionXMasterGoogleTypeID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]