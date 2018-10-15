CREATE TABLE [dbo].[UserTrip](
	[UserTripId] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [int] NULL,
	[TripName] [varchar](500) NULL,
	[CreatedDate] [datetime] NULL,
	[ModifiedDate] [datetime] NULL,
	[CountryId] [int] NULL,
	[StartDate] [date] NULL,
	[EndDate] [date] NULL,
	[TravelModeId] [int] NULL,
	[SourceAttractionId] [int] NULL,
	[DestinationAttractionId] [int] NULL,
	[NoOfPersons] [int] NULL,
	[NoOfCars] [int] NULL,
	[CarMileage] [decimal](18, 2) NULL,
	[FuelPrice] [decimal](18, 2) NULL,
 [DrivingBreak] INT NULL, 
    CONSTRAINT [PK_UserTrip] PRIMARY KEY CLUSTERED 
(
	[UserTripId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

ALTER TABLE [dbo].[UserTrip]  WITH CHECK ADD  CONSTRAINT [FK_UserTrip_User] FOREIGN KEY([UserId])
REFERENCES [dbo].[User] ([UserId])
GO

ALTER TABLE [dbo].[UserTrip] CHECK CONSTRAINT [FK_UserTrip_User]
GO