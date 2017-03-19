CREATE TABLE [dbo].[AttractionTravelTimeDistance] (
    [AttractionTravelTimeDistanceId] INT IDENTITY (1, 1) NOT NULL,
    [SourceAttractionId]             INT NULL,
    [DestinationAttractionId]        INT NULL,
    [TravelModeId]                   INT NULL,
    [TravelTime]                     INT NULL,
    [Distance]                       INT NULL,
    CONSTRAINT [PK_AttractionTravelTimeDistance] PRIMARY KEY CLUSTERED ([AttractionTravelTimeDistanceId] ASC),
    CONSTRAINT [FK_AttractionTravelTimeDistance_Attractions] FOREIGN KEY ([SourceAttractionId]) REFERENCES [dbo].[Attractions] ([AttractionsId]),
    CONSTRAINT [FK_AttractionTravelTimeDistance_Attractions1] FOREIGN KEY ([DestinationAttractionId]) REFERENCES [dbo].[Attractions] ([AttractionsId]),
    CONSTRAINT [FK_AttractionTravelTimeDistance_MasterTravelMode] FOREIGN KEY ([TravelModeId]) REFERENCES [dbo].[MasterTravelMode] ([TravelModeId])
);

