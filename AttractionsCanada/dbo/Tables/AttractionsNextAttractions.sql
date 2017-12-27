CREATE TABLE [dbo].[AttractionsNextAttractions](
	[AttractionsNextAttractionsId] [int] IDENTITY(1,1) NOT NULL,
	[AttractionsId] [int] NULL,
	[NextAttractionsId] [int] NULL,
 CONSTRAINT [PK_AttractionsNextAttractions] PRIMARY KEY CLUSTERED 
(
	[AttractionsNextAttractionsId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

ALTER TABLE [dbo].[AttractionsNextAttractions]  WITH CHECK ADD  CONSTRAINT [FK_AttractionsNextAttractions_Attractions] FOREIGN KEY([AttractionsId])
REFERENCES [dbo].[Attractions] ([AttractionsId])
GO

ALTER TABLE [dbo].[AttractionsNextAttractions] CHECK CONSTRAINT [FK_AttractionsNextAttractions_Attractions]
GO

ALTER TABLE [dbo].[AttractionsNextAttractions]  WITH CHECK ADD  CONSTRAINT [FK_AttractionsNextAttractions_Attractions1] FOREIGN KEY([NextAttractionsId])
REFERENCES [dbo].[Attractions] ([AttractionsId])
GO

ALTER TABLE [dbo].[AttractionsNextAttractions] CHECK CONSTRAINT [FK_AttractionsNextAttractions_Attractions1]
GO