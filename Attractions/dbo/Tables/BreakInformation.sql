CREATE TABLE [dbo].[BreakInformation](
	[BreakInformationId] [int] NOT NULL,
	[BreakType] [varchar](250) NULL,
	[StartTime] [time](7) NULL,
	[MinimumTime] [time](7) NULL,
	[Display] [varchar](250) NULL,
 [EndTime] TIME NULL, 
    CONSTRAINT [PK_BreakInformation] PRIMARY KEY CLUSTERED 
(
	[BreakInformationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
