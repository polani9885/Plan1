CREATE TABLE [dbo].[GoogleMapsLogging](
	[GoogleMapsLoggingId] [int] IDENTITY(1,1) NOT NULL,
	[MapType] [varchar](50) NULL,
	[MethodName] [varchar](50) NULL,
	[CreatedDate] [date] NULL,
	[AttractionName] [varchar](250) NULL,
	[Logitude] [varchar](50) NULL,
	[Latitude] [varchar](50) NULL,
	[Counter] [int] NULL
) ON [PRIMARY]