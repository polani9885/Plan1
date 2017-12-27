CREATE TABLE [dbo].[AttractionsActiveStatus](
	[AttractionsActiveStatusId] [int] IDENTITY(1,1) NOT NULL,
	[AttractionsId] [int] NULL,
	[OpenTime] [time](7) NULL,
	[CloseTime] [time](7) NULL,
	[MasterWeekId] [int] NULL,
 CONSTRAINT [PK_AttractionsActiveStatus] PRIMARY KEY CLUSTERED 
(
	[AttractionsActiveStatusId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

ALTER TABLE [dbo].[AttractionsActiveStatus]  WITH CHECK ADD  CONSTRAINT [FK_AttractionsActiveStatus_Attractions] FOREIGN KEY([AttractionsId])
REFERENCES [dbo].[Attractions] ([AttractionsId])
GO

ALTER TABLE [dbo].[AttractionsActiveStatus] CHECK CONSTRAINT [FK_AttractionsActiveStatus_Attractions]
GO
