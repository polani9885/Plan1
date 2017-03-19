CREATE TABLE [dbo].[MissingDistanceAttractionsRecordsXAttractions] (
    [MissingDistanceAttractionsRecordsXAttractionsID] INT           IDENTITY (1, 1) NOT NULL,
    [AttractionsID]                                   INT           NULL,
    [MissingDistanceAttractionsRecordsID]             INT           NULL,
    [IsTaken]                                         BIT           NULL,
    [IsResolved]                                      BIT           NULL,
    [CreatedDate]                                     DATETIME      NULL,
    [CreatedBy]                                       VARCHAR (250) NULL,
    [ModifiedDate]                                    DATETIME      NULL,
    [ModifedBy]                                       VARCHAR (250) NULL,
    CONSTRAINT [PK_MissingDistanceAttractionsRecordsXAttractions] PRIMARY KEY CLUSTERED ([MissingDistanceAttractionsRecordsXAttractionsID] ASC),
    CONSTRAINT [FK_MissingDistanceAttractionsRecordsXAttractions_MissingDistanceAttractionsRecords] FOREIGN KEY ([MissingDistanceAttractionsRecordsID]) REFERENCES [dbo].[MissingDistanceAttractionsRecords] ([MissingDistanceAttractionsRecordsID])
);

