CREATE TABLE [dbo].[MasterPriceInfo](
	[MasterPriceInfoId] [int] NOT NULL,
	[PriveLevel] [int] NULL,
	[Food] [decimal](18, 0) NULL,
	[Stay] [decimal](18, 0) NULL,
 CONSTRAINT [PK_MasterPriceInfo] PRIMARY KEY CLUSTERED 
(
	[MasterPriceInfoId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
