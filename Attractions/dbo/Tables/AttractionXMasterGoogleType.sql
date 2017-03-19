CREATE TABLE [dbo].[AttractionXMasterGoogleType] (
    [AttractionXMasterGoogleTypeID] INT IDENTITY (1, 1) NOT NULL,
    [AttractionId]                  INT NULL,
    [GoogleTypeId]                  INT NULL,
    CONSTRAINT [PK_AttractionXMasterGoogleType] PRIMARY KEY CLUSTERED ([AttractionXMasterGoogleTypeID] ASC),
    CONSTRAINT [FK_AttractionXMasterGoogleType_Attractions] FOREIGN KEY ([AttractionId]) REFERENCES [dbo].[Attractions] ([AttractionsId]),
    CONSTRAINT [FK_AttractionXMasterGoogleType_MasterGoogleType] FOREIGN KEY ([GoogleTypeId]) REFERENCES [dbo].[MasterGoogleType] ([GoogleTypeID])
);

