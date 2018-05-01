CREATE TYPE [dbo].[NearBySearch] AS TABLE(
	[AttractionName] [varchar](500) NULL,
	[GoogleSearchText] [varchar](500) NULL,
	PlaceId varchar (250)
)