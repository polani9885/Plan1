CREATE TABLE [dbo].[MissingAttractionRestarentSearch](
	[MissingAttractionRestarentSearchId] [bigint] IDENTITY(1,1) NOT NULL,
	[AttractionsId] [bigint] NULL,
	[CreatedDate] [datetime] NULL,
 CONSTRAINT [PK_MissingAttractionRestarentSearch] PRIMARY KEY CLUSTERED 
(
	[MissingAttractionRestarentSearchId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]