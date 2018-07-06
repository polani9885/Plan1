CREATE TABLE [dbo].[UserTripBuildStatus](
	[UserTripBuildStatusId] [bigint] IDENTITY(1,1) NOT NULL,
	[UserTripId] [int] NULL,
	[IsError] [bit] NULL,
	[UserTripBuildMessageId] [int] NULL,
	[FormattedMessage] [varchar](max) NULL,
	[CreatedDate] [datetime] NULL,
 CONSTRAINT [PK_UserTripBuildStatus] PRIMARY KEY CLUSTERED 
(
	[UserTripBuildStatusId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO

ALTER TABLE [dbo].[UserTripBuildStatus]  WITH CHECK ADD  CONSTRAINT [FK_UserTripBuildStatus_UserTrip] FOREIGN KEY([UserTripId])
REFERENCES [dbo].[UserTrip] ([UserTripId])
GO

ALTER TABLE [dbo].[UserTripBuildStatus] CHECK CONSTRAINT [FK_UserTripBuildStatus_UserTrip]
GO

ALTER TABLE [dbo].[UserTripBuildStatus]  WITH CHECK ADD  CONSTRAINT [FK_UserTripBuildStatus_UserTripBuildMessage] FOREIGN KEY([UserTripBuildMessageId])
REFERENCES [dbo].[UserTripBuildMessage] ([UserTripBuildMessageId])
GO

ALTER TABLE [dbo].[UserTripBuildStatus] CHECK CONSTRAINT [FK_UserTripBuildStatus_UserTripBuildMessage]
GO