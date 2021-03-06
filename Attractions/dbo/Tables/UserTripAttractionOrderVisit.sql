﻿
CREATE TABLE [dbo].[UserTripAttractionOrderVisit](
	[UserTripAttractionOrderVisitId] [bigint] IDENTITY(1,1) NOT NULL,
	[UserTripId] [int] NULL,
	[SourceAttractionId] [int] NULL,
	[DestinationAttractionId] [int] NULL,
	[Distance] [varchar](50) NULL,
	[TravelTime] [varchar](50) NULL,
	[TravelModeId] [int] NULL,
	[SourceAttractionName] [varchar](1000) NULL,
	[DestinationAttractionName] [varchar](1000) NULL,
	[DateAndTime] [varchar](50) NULL,
	[ReachTime] [varchar](50) NULL,
	[TimeRequiredToView] [varchar](50) NULL,
	[EventEndTime] [varchar](50) NULL,
	[TravelType] [varchar](50) NULL,
	[SourceIcon] [varchar](1000) NULL,
	[DestinationIcon] [varchar](1000) NULL,
	[RecordCount] [int] NULL,
	[IsOrderUpdated] [bit] NULL,
	[UpdatedOrder] [int] NULL,
	[IsUpdatedViewTime] [bit] NULL,
	[UpdatedTime] [varchar](50) NULL,
	[IsPersonalRequest] [bit] NULL,
	[IsLunchDinnerBreakTime] [bit] NULL,
	[IsDistanceCalculationMissing] [bit] NULL,
	[SourceDirection] [varchar](1000) NULL,
	[DestinationDirection] [varchar](1000) NULL,
	[SourceRating] [varchar](50) NULL,
	[DestinationRating] [varchar](50) NULL,
	[SourceRatingTotal] [varchar](50) NULL,
	[DestinationRatingTotal] [varchar](50) NULL,
	[SourceSearchText] [varchar](1000) NULL,
	[DestinationSearchText] [varchar](1000) NULL,
	[SourceOpenTime] [varchar](1000) NULL,
	[SourceCloseTime] [varchar](1000) NULL,
	[DestinationOpenTime] [varchar](1000) NULL,
	[DestinationCloseTime] [varchar](1000) NULL,
	[SourcePhoto] [varchar](1000) NULL,
	[DestinationPhoto] [varchar](1000) NULL,
	[SourceLongitude] [varchar](50) NULL,
	[SourceLatitude] [varchar](50) NULL,
	[DestinationLongitude] [varchar](50) NULL,
	[DestinationLatitude] [varchar](50) NULL,
	[CreatedDate] [datetime] NULL,
 [SourcePhotoUrl] VARCHAR(1000) NULL, 
    [DestinationPhotoUrl] VARCHAR(1000) NULL, 
    [BreakInformationId] INT NULL, 
    [IsNeedDrivningBreak] BIT NULL, 
    [AttractionTravelTimeDistanceId] BIGINT NULL, 
    CONSTRAINT [PK_UserTripAttractionOrderVisit] PRIMARY KEY CLUSTERED 
(
	[UserTripAttractionOrderVisitId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO



ALTER TABLE [dbo].[UserTripAttractionOrderVisit]  WITH CHECK ADD  CONSTRAINT [FK_UserTripAttractionOrderVisit_UserTrip] FOREIGN KEY([UserTripId])
REFERENCES [dbo].[UserTrip] ([UserTripId])
GO

ALTER TABLE [dbo].[UserTripAttractionOrderVisit] CHECK CONSTRAINT [FK_UserTripAttractionOrderVisit_UserTrip]
GO

