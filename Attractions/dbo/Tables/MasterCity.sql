CREATE TABLE [dbo].[MasterCity] (
    [CityId]        INT           NOT NULL,
    [CityName]      VARCHAR (250) NULL,
    [CityShortName] VARCHAR (50)  NULL,
    [StateId]       INT           NULL,
    [IsDefault] BIT NULL, 
    CONSTRAINT [PK_MasterCity] PRIMARY KEY CLUSTERED ([CityId] ASC),
    CONSTRAINT [FK_MasterCity_MasterState] FOREIGN KEY ([StateId]) REFERENCES [dbo].[MasterState] ([StateId])
);

