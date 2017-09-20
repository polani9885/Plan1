CREATE TABLE [dbo].[AttractionXMasterGoogleType] (
    [AttractionXMasterGoogleTypeID] INT IDENTITY (1, 1) NOT NULL,
    [AttractionId]                  INT NULL,
    [GoogleTypeId]                  INT NULL,
    CONSTRAINT [PK_AttractionXMasterGoogleType] PRIMARY KEY CLUSTERED ([AttractionXMasterGoogleTypeID] ASC)
);

