CREATE TYPE [dbo].[NearBySearch] AS TABLE(
	[AttractionName] [varchar](500) NULL,
	[GoogleSearchText] [varchar](500) NULL,
	[PlaceId] [varchar](250) NULL,
	[Latitude] [varchar](50) NULL,
	[Longitude] [varchar](50) NULL,
	types Varchar(Max)
)