CREATE TABLE [dbo].[UserTripAttractionList](
	[UserTripAttractionListId] [bigint] IDENTITY(1,1) NOT NULL,
	[UserTripId] [int] NULL,
	[AttractionId] [int] NULL,
	[CreatedDate] [datetime] NULL,
 CONSTRAINT [PK_UserTripAttractionList] PRIMARY KEY CLUSTERED 
(
	[UserTripAttractionListId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

ALTER TABLE [dbo].[UserTripAttractionList]  WITH CHECK ADD  CONSTRAINT [FK_UserTripAttractionList_UserTrip] FOREIGN KEY([UserTripId])
REFERENCES [dbo].[UserTrip] ([UserTripId])
GO

ALTER TABLE [dbo].[UserTripAttractionList] CHECK CONSTRAINT [FK_UserTripAttractionList_UserTrip]
GO
