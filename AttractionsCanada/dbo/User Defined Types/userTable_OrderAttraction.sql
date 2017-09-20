CREATE TYPE [dbo].[userTable_OrderAttraction] AS TABLE (
    [OrderNumber]               INT           IDENTITY (1, 1) NOT NULL,
    [SourceAttractionId]        INT           NULL,
    [DestinationAttractionId]   INT           NULL,
    [Distance]                  INT           NULL,
    [TravelTime]                INT           NULL,
    [TravelModeId]              INT           NULL,
    [SourceAttractionName]      VARCHAR (500) NULL,
    [DestinationAttractionName] VARCHAR (500) NULL,
    [DateAndTime]               DATETIME      NULL,
    [ReachTime]                 DATETIME      NULL,
    [TimeRequiredToView]        INT           NULL,
    [ViewTime]                  DATETIME      NULL);

