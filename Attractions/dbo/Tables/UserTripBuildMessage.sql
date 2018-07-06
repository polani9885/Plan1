CREATE TABLE [dbo].[UserTripBuildMessage](
	[UserTripBuildMessageId] [int] NOT NULL,
	[Message] [varchar](max) NULL,
	[BuildMessage] [varchar](500) NULL,
 CONSTRAINT [PK_UserTripBuildMessage] PRIMARY KEY CLUSTERED 
(
	[UserTripBuildMessageId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

