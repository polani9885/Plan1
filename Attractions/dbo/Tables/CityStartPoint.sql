﻿CREATE TABLE [dbo].[CityStartPoint](
	[CityStartPointId] [int] IDENTITY(1,1) NOT NULL,
	[CityId] [int] NULL,
	[AttractionId] [int] NULL,
 CONSTRAINT [PK_CityStartPoint] PRIMARY KEY CLUSTERED 
(
	[CityStartPointId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]