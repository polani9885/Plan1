CREATE TABLE [dbo].[MasterCountry] (
    [CountryId]        INT           NOT NULL,
    [CountryName]      VARCHAR (250) NULL,
    [CountryShortName] VARCHAR (50)  NULL,
    [CreatedBy] VARCHAR(50) NULL, 
    [CreatedDate] DATETIME NULL, 
    [ModifiedBy] VARCHAR(50) NULL, 
    [ModifiedDate] DATETIME NULL, 
    [IsDefault] BIT NULL, 
    CONSTRAINT [PK_MaterCountry] PRIMARY KEY CLUSTERED ([CountryId] ASC)
);

