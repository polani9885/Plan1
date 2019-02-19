CREATE TABLE [dbo].[Maps](
	[MapsId] [int] NOT NULL,
	[MapName] [varchar](250) NULL,
	[MaxCountPerDay] [int] NULL,
	[MaxTotalCount] [int] NULL,
 [PerMonthCount] INT NULL, 
    CONSTRAINT [PK_Maps] PRIMARY KEY CLUSTERED 
(
	[MapsId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]