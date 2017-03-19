CREATE TABLE [dbo].[MasterState] (
    [StateId]        INT           NOT NULL,
    [StateName]      VARCHAR (250) NULL,
    [CountryId]      INT           NULL,
    [StateShortName] VARCHAR (50)  NULL,
    [IsDefault] BIT NULL, 
    CONSTRAINT [PK_MasterState] PRIMARY KEY CLUSTERED ([StateId] ASC),
    CONSTRAINT [FK_MasterState_MaterCountry] FOREIGN KEY ([CountryId]) REFERENCES [dbo].[MasterCountry] ([CountryId])
);

