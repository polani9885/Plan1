CREATE TABLE [dbo].[MasterWeek] (
    [MasterWeekId] INT          NOT NULL,
    [WeekName]     VARCHAR (50) NULL,
    CONSTRAINT [PK_MasterWeek] PRIMARY KEY CLUSTERED ([MasterWeekId] ASC)
);

