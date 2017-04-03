CREATE TABLE [dbo].[Attractions](
	[AttractionsId] [int] IDENTITY(1,1) NOT NULL,
	[AttractionName] [varchar](500) NULL,
	[AddressOne] [varchar](500) NULL,
	[AddressTwo] [varchar](500) NULL,
	[CityId] [int] NULL,
	[CategoryId] [int] NULL,
	[Longitude] [varchar](250) NULL,
	[Latitude] [varchar](250) NULL,
	[PlaceId] [varchar](250) NULL,
	[RankId] [int] NULL,
	[CreatedDate] [datetime] NULL,
	[CreatedBy] [varchar](250) NULL,
	[ModifiedDate] [datetime] NULL,
	[ModifiedBy] [varchar](250) NULL,
	[GoogleSearchText] [varchar](500) NULL,
	[GoogleWebSite] [varchar](500) NULL,
	[GoogleICon] [varchar](500) NULL,
	[GoogleInternational_phone_number] [varchar](500) NULL,
	[Googleadr_address] [varchar](2000) NULL,
	[GoogleName] [varchar](500) NULL,
	[IsScannedNearBy] [bit] NULL,
	[IsPlaceDetailsDone] [bit] NULL,
	[IsNearDistanceDone] [bit] NULL,
	[PriceLevel] [int] NULL,
	[GoogleRating] [decimal](18, 2) NULL,
 CONSTRAINT [PK_Attractions] PRIMARY KEY CLUSTERED 
(
	[AttractionsId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

