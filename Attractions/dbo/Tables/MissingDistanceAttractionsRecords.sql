CREATE TABLE [dbo].[MissingDistanceAttractionsRecords] (
    [MissingDistanceAttractionsRecordsID] INT           IDENTITY (1, 1) NOT NULL,
    [AttractionsID]                       INT           NULL,
    [MasterTravelModeID]                  INT           NULL,
    [CreatedDate]                         DATETIME      NULL,
    [CreatedBy]                           VARCHAR (250) NULL,
    [ModifiedDate]                        DATETIME      NULL,
    [ModifiedBy]                          VARCHAR (250) NULL,
    CONSTRAINT [PK_MissingDistanceAttractionsRecords] PRIMARY KEY CLUSTERED ([MissingDistanceAttractionsRecordsID] ASC),
    CONSTRAINT [FK_MissingDistanceAttractionsRecords_Attractions] FOREIGN KEY ([AttractionsID]) REFERENCES [dbo].[Attractions] ([AttractionsId]),
    CONSTRAINT [FK_MissingDistanceAttractionsRecords_MasterTravelMode] FOREIGN KEY ([MasterTravelModeID]) REFERENCES [dbo].[MasterTravelMode] ([TravelModeId])
);

