CREATE TABLE [dbo].[MapsXCategory](
	[MapsXCategoryId] [int] NOT NULL,
	[MapsId] [int] NULL,
	[TypeName] [varchar](500) NULL,
	[IsNeeded] [bit] NULL,
	[ExtraSearch] [bit] NULL,
 CONSTRAINT [PK_MapsXCategory] PRIMARY KEY CLUSTERED 
(
	[MapsXCategoryId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO


ALTER TABLE [dbo].[MapsXCategory]  WITH CHECK ADD  CONSTRAINT [FK_MapsXCategory_Maps] FOREIGN KEY([MapsId])
REFERENCES [dbo].[Maps] ([MapsId])
GO

ALTER TABLE [dbo].[MapsXCategory] CHECK CONSTRAINT [FK_MapsXCategory_Maps]
GO

