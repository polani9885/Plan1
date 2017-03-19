CREATE TABLE [dbo].[AttractionsActiveStatus] (
    [AttractionsActiveStatusId] INT      IDENTITY (1, 1) NOT NULL,
    [AttractionsId]             INT      NULL,
    [OpenTime]                  TIME (7) NULL,
    [CloseTime]                 TIME (7) NULL,
    [MasterWeekId]              INT      NULL,
    CONSTRAINT [PK_AttractionsActiveStatus] PRIMARY KEY CLUSTERED ([AttractionsActiveStatusId] ASC),
    CONSTRAINT [FK_AttractionsActiveStatus_Attractions] FOREIGN KEY ([AttractionsId]) REFERENCES [dbo].[Attractions] ([AttractionsId]),
    CONSTRAINT [FK_AttractionsActiveStatus_MasterWeek] FOREIGN KEY ([MasterWeekId]) REFERENCES [dbo].[MasterWeek] ([MasterWeekId])
);

