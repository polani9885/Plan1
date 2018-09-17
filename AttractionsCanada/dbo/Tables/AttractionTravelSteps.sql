CREATE TABLE [dbo].[AttractionTravelSteps](
	[AttractionTravelStepsId] [bigint] IDENTITY(1,1) NOT NULL,
	[AttractionTravelTimeDistanceId] [int] NULL,
	[Distance_Value] [int] NULL,
	[Duration_Value] [int] NULL,
	[End_location_lat] [varchar](50) NULL,
	[End_location_lng] [varchar](50) NULL,
	[Start_location_lat] [varchar](50) NULL,
	[Start_location_lng] [varchar](50) NULL,
	[Travel_mode] [varchar](50) NULL,
	[OrderId] [int] NULL,
 CONSTRAINT [PK_AttractionTravelSteps] PRIMARY KEY CLUSTERED 
(
	[AttractionTravelStepsId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO



ALTER TABLE [dbo].[AttractionTravelSteps]  WITH CHECK ADD  CONSTRAINT [FK_AttractionTravelSteps_AttractionTravelTimeDistance] FOREIGN KEY([AttractionTravelTimeDistanceId])
REFERENCES [dbo].[AttractionTravelTimeDistance] ([AttractionTravelTimeDistanceId])
GO

ALTER TABLE [dbo].[AttractionTravelSteps] CHECK CONSTRAINT [FK_AttractionTravelSteps_AttractionTravelTimeDistance]
GO