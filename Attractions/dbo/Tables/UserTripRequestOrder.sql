CREATE TABLE [dbo].[UserTripRequestOrder](
	[UserTripRequestOrderId] [int] IDENTITY(1,1) NOT NULL,
	[UserTripId] [int] NULL,
	[AttractionId] [int] NULL,
	[OrderNumber] [int] NULL,
	[CreatedDate] [datetime] NULL,
 CONSTRAINT [PK_UserTripRequestOrder] PRIMARY KEY CLUSTERED 
(
	[UserTripRequestOrderId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

ALTER TABLE [dbo].[UserTripRequestOrder]  WITH CHECK ADD  CONSTRAINT [FK_UserTripRequestOrder_UserTrip] FOREIGN KEY([UserTripId])
REFERENCES [dbo].[UserTrip] ([UserTripId])
GO

ALTER TABLE [dbo].[UserTripRequestOrder] CHECK CONSTRAINT [FK_UserTripRequestOrder_UserTrip]
GO

