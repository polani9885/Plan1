CREATE TABLE [dbo].[MasterCategory] (
    [CategoryId]   INT           NOT NULL,
    [CategoryName] VARCHAR (250) NULL,
    [ViewTime] TIME NULL, 
    CONSTRAINT [PK_MasterCategory] PRIMARY KEY CLUSTERED ([CategoryId] ASC)
);

