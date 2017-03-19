CREATE TABLE [dbo].[AttractionAverageTime] (
    [AttractionAverageTimeId] INT IDENTITY (1, 1) NOT NULL,
    [AttractionsId]           INT NULL,
    [AverageCost]             INT NULL,
    [AverageTime]             INT NULL,
    CONSTRAINT [PK_AttractionAverageTime] PRIMARY KEY CLUSTERED ([AttractionAverageTimeId] ASC),
    CONSTRAINT [FK_AttractionAverageTime_Attractions] FOREIGN KEY ([AttractionsId]) REFERENCES [dbo].[Attractions] ([AttractionsId])
);

