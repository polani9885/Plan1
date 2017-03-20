﻿CREATE TABLE [dbo].[MasterGoogleType] (
    [GoogleTypeID] INT           NOT NULL,
    [TypeName]     VARCHAR (500) NULL,
    [IsNeeded] BIT NULL, 
    CONSTRAINT [PK_MasterGoogleType] PRIMARY KEY CLUSTERED ([GoogleTypeID] ASC)
);

