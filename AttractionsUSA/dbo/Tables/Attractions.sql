CREATE TABLE [dbo].[Attractions](
	[AttractionsId] [int] IDENTITY(1,1) NOT NULL,
	[AttractionName] [varchar](500) NULL,
	[CityId] [int] NULL,
	[Longitude] [varchar](250) NULL,
	[Latitude] [varchar](250) NULL,
	[RankId] [int] NULL,
	[CreatedDate] [datetime] NULL,
	[CreatedBy] [varchar](250) NULL,
	[ModifiedDate] [datetime] NULL,
	[ModifiedBy] [varchar](250) NULL,
	[SearchAddress] [varchar](500) NULL,
	[WebSite] [varchar](500) NULL,
	[phone_number] [varchar](500) NULL,
	[IsScannedNearBy] [bit] NULL,
	[IsPlaceDetailsDone] [bit] NULL,
	[IsNearDistanceDone] [bit] NULL,
	[PriceLevel] [int] NULL,
	[Rating] [decimal](18, 2) NULL,
	[User_ratings_total] [int] NULL,
	[IsLatAndLon] [bit] NULL,
	[Utc_offset] [int] NULL,
	[IsUserRequested] [bit] NULL,
	[IsGoogleSearchTextDone] [bit] NULL,
 CONSTRAINT [PK_Attractions] PRIMARY KEY CLUSTERED 
(
	[AttractionsId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO