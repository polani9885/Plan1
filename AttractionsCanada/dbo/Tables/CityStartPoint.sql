CREATE TABLE [dbo].[CityStartPoint] (
    [CityStartPointId] INT IDENTITY (1, 1) NOT NULL,
    [CityId]           INT NULL,
    [AttractionId]     INT NULL,
    CONSTRAINT [PK_CityStartPoint] PRIMARY KEY CLUSTERED ([CityStartPointId] ASC)
);

