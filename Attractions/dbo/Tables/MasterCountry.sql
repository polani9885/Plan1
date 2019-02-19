CREATE TABLE [dbo].[MasterCountry] (
    [CountryId]        INT           NOT NULL,
    [CountryName]      VARCHAR (250) NULL,
    [CountryShortName] VARCHAR (50)  NULL,
    [CreatedBy] VARCHAR(50) NULL, 
    [CreatedDate] DATETIME NULL, 
    [ModifiedBy] VARCHAR(50) NULL, 
    [ModifiedDate] DATETIME NULL, 
    [IsDefault] BIT NULL, 
    [ServerName] VARCHAR(50) NULL, 
    [IsWindowsAccess] BIT NULL, 
    [UserName] VARCHAR(50) NULL, 
    [Password] VARCHAR(50) NULL, 
    [DatabaseName] VARCHAR(50) NULL, 
    [DistanceMeasure] VARCHAR(50) NULL, 
    [MetersIn] DECIMAL(32, 18) NULL, 
    CONSTRAINT [PK_MaterCountry] PRIMARY KEY CLUSTERED ([CountryId] ASC)
);

