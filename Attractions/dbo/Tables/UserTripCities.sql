CREATE TABLE [dbo].[UserTripCities](
	[UserTripCitiesId] [int] IDENTITY(1,1) NOT NULL,
	[UserTripId] [int] NULL,
	[MasterCityId] [int] NULL,
	[CreatedDate] [date] NULL,
 [RecordIndex] INT NULL, 
    CONSTRAINT [PK_UserTripCities] PRIMARY KEY CLUSTERED 
(
	[UserTripCitiesId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

ALTER TABLE [dbo].[UserTripCities]  WITH CHECK ADD  CONSTRAINT [FK_UserTripCities_MasterCity] FOREIGN KEY([MasterCityId])
REFERENCES [dbo].[MasterCity] ([CityId])
GO

ALTER TABLE [dbo].[UserTripCities] CHECK CONSTRAINT [FK_UserTripCities_MasterCity]
GO

ALTER TABLE [dbo].[UserTripCities]  WITH CHECK ADD  CONSTRAINT [FK_UserTripCities_UserTrip] FOREIGN KEY([UserTripId])
REFERENCES [dbo].[UserTrip] ([UserTripId])
GO

ALTER TABLE [dbo].[UserTripCities] CHECK CONSTRAINT [FK_UserTripCities_UserTrip]
GO