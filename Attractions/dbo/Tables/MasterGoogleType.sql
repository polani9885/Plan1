CREATE TABLE [dbo].[MasterGoogleType] (
    [GoogleTypeID] INT           IDENTITY (1, 1) NOT NULL,
    [TypeName]     VARCHAR (500) NULL,
    CONSTRAINT [PK_MasterGoogleType] PRIMARY KEY CLUSTERED ([GoogleTypeID] ASC)
);

