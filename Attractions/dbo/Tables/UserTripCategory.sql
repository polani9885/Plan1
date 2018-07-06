CREATE TABLE [dbo].[UserTripCategory](
	[UserTripCategoryId] [bigint] IDENTITY(1,1) NOT NULL,
	[UserTripId] [int] NULL,
	[GoogleTypeID] [int] NULL,
	[TypeName] [varchar](1000) NULL,
	[CreateDate] [datetime] NULL,
 CONSTRAINT [PK_UserTripCategory] PRIMARY KEY CLUSTERED 
(
	[UserTripCategoryId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

ALTER TABLE [dbo].[UserTripCategory]  WITH CHECK ADD  CONSTRAINT [FK_UserTripCategory_MasterGoogleType] FOREIGN KEY([GoogleTypeID])
REFERENCES [dbo].[MasterGoogleType] ([GoogleTypeID])
GO

ALTER TABLE [dbo].[UserTripCategory] CHECK CONSTRAINT [FK_UserTripCategory_MasterGoogleType]
GO

ALTER TABLE [dbo].[UserTripCategory]  WITH CHECK ADD  CONSTRAINT [FK_UserTripCategory_UserTrip] FOREIGN KEY([UserTripId])
REFERENCES [dbo].[UserTrip] ([UserTripId])
GO

ALTER TABLE [dbo].[UserTripCategory] CHECK CONSTRAINT [FK_UserTripCategory_UserTrip]
GO