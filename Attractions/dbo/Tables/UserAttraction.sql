CREATE TABLE [dbo].[UserAttraction](
	[UserAttractionId] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [int] NULL,
	[TourName] [varchar](500) NULL,
	[TotalExpenditure] [money] NULL,
	[TotalDistance] [int] NULL,
	[NoOfHours] [int] NULL,
	[NoOfNights] [int] NULL,
	[CreatedUTCDate] [datetime] NULL,
	[CreatedBy] [varchar](250) NULL,
	[ModifiedUTCDate] [datetime] NULL,
	[ModifiedBy] [varchar](250) NULL,
	[NoOfLunchSlots] [int] NULL,
	[NoOfBreakFeastSlots] [int] NULL,
	[NoOfDinnerSlots] [int] NULL,
	[NoOfHotelsVisited] [int] NULL,
	[TravelDate] [datetime] NULL,
	[StartLocationId] [int] NULL,
	[EndLocationId] [int] NULL,
 CONSTRAINT [PK_UserAttraction] PRIMARY KEY CLUSTERED 
(
	[UserAttractionId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO


ALTER TABLE [dbo].[UserAttraction]  WITH CHECK ADD  CONSTRAINT [FK_UserAttraction_User] FOREIGN KEY([UserId])
REFERENCES [dbo].[User] ([UserId])
GO

ALTER TABLE [dbo].[UserAttraction] CHECK CONSTRAINT [FK_UserAttraction_User]