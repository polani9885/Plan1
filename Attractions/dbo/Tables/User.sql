﻿CREATE TABLE [dbo].[User](
	[UserId] [int] IDENTITY(1,1) NOT NULL,
	[UserName] [varchar](250) NULL,
	[Email] [varchar](250) NULL,
	[Password] [varchar](250) NULL,
	[GooglePlusId] [int] NULL,
	[FaceBookId] [int] NULL,
	[MasterCountryId] [int] NULL,
	[MasterStateId] [int] NULL,
	[MasterCityId] [int] NULL,
	[AddressOne] [varchar](250) NULL,
	[AddressTwo] [varchar](250) NULL,
	[ZipCode] [varchar](10) NULL,
	[PhoneNumber] [varchar](50) NULL,
	[CreatedUTCDate] [datetime] NULL,
	[ModifiedUTCDate] [datetime] NULL,
	[ModifiedBy] [varchar](50) NULL,
 CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO



ALTER TABLE [dbo].[User]  WITH CHECK ADD  CONSTRAINT [FK_User_MasterCity] FOREIGN KEY([MasterCityId])
REFERENCES [dbo].[MasterCity] ([CityId])
GO

ALTER TABLE [dbo].[User] CHECK CONSTRAINT [FK_User_MasterCity]
GO

ALTER TABLE [dbo].[User]  WITH CHECK ADD  CONSTRAINT [FK_User_MasterCountry] FOREIGN KEY([MasterCountryId])
REFERENCES [dbo].[MasterCountry] ([CountryId])
GO

ALTER TABLE [dbo].[User] CHECK CONSTRAINT [FK_User_MasterCountry]
GO

ALTER TABLE [dbo].[User]  WITH CHECK ADD  CONSTRAINT [FK_User_MasterState] FOREIGN KEY([MasterStateId])
REFERENCES [dbo].[MasterState] ([StateId])
GO

ALTER TABLE [dbo].[User] CHECK CONSTRAINT [FK_User_MasterState]
GO