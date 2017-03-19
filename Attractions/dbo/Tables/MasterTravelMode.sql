CREATE TABLE [dbo].[MasterTravelMode] (
    [TravelModeId] INT           NOT NULL,
    [TravelType]   VARCHAR (500) NULL,
    CONSTRAINT [PK_MasterTravelMode] PRIMARY KEY CLUSTERED ([TravelModeId] ASC)
);

