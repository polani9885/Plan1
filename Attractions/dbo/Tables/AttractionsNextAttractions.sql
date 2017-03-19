CREATE TABLE [dbo].[AttractionsNextAttractions] (
    [AttractionsNextAttractionsId] INT IDENTITY (1, 1) NOT NULL,
    [AttractionsId]                INT NULL,
    [NextAttractionsId]            INT NULL,
    CONSTRAINT [PK_AttractionsNextAttractions] PRIMARY KEY CLUSTERED ([AttractionsNextAttractionsId] ASC),
    CONSTRAINT [FK_AttractionsNextAttractions_Attractions] FOREIGN KEY ([AttractionsId]) REFERENCES [dbo].[Attractions] ([AttractionsId]),
    CONSTRAINT [FK_AttractionsNextAttractions_Attractions1] FOREIGN KEY ([NextAttractionsId]) REFERENCES [dbo].[Attractions] ([AttractionsId])
);

