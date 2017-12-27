CREATE TYPE [dbo].[User_GoogleReview] AS TABLE(
	[Rating] [int] NULL,
	[Author_name] [varchar](250) NULL,
	[Author_url] [varchar](250) NULL,
	[Language] [varchar](50) NULL,
	[Profile_photo_url] [varchar](500) NULL,
	[Text] [varchar](max) NULL
)
GO
