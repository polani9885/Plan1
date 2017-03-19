CREATE TABLE [dbo].[CityStartPoint] (
    [CityStartPointId] INT IDENTITY (1, 1) NOT NULL,
    [CityId]           INT NULL,
    [AttractionId]     INT NULL,
    CONSTRAINT [PK_CityStartPoint] PRIMARY KEY CLUSTERED ([CityStartPointId] ASC),
    CONSTRAINT [FK_CityStartPoint_Attractions] FOREIGN KEY ([AttractionId]) REFERENCES [dbo].[Attractions] ([AttractionsId]),
    CONSTRAINT [FK_CityStartPoint_MasterCity] FOREIGN KEY ([CityId]) REFERENCES [dbo].[MasterCity] ([CityId])
);

