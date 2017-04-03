CREATE TABLE [dbo].[AttractionReview](
	[AttractionReviewId] [int] IDENTITY(1,1) NOT NULL,
	[AttractionId] [int] NULL,
	[Rating] [int] NULL,
	[Author_name] [varchar](250) NULL,
	[Author_url] [varchar](250) NULL,
	[Language] [varchar](50) NULL,
	[Profile_photo_url] [varchar](500) NULL,
	[Text] [varchar](max) NULL,
	[CreatedDate] [datetime] NULL,
	[IsGoogleCreated] [bit] NULL,
 CONSTRAINT [PK_AttractionReview] PRIMARY KEY CLUSTERED 
(
	[AttractionReviewId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
