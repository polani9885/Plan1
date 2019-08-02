CREATE TABLE [dbo].[MapsLoggingError](
	[MapsLoggingErrorId] [int] IDENTITY(1,1) NOT NULL,	
	[MethodName] [varchar](50) NULL,	
	[MapsId] [int] NULL,
	[MapsCredentialsId] [int] NULL,
	[CreatedDate] [datetime] NULL,
	[MapFeaturesId] [int] NULL,
	Response Varchar(MAX),
	ErrorMessage Varchar(MAX),
	[ErrorStack]	Varchar(MAX),
	CountryId	INT,
	AttractionId	INT
 CONSTRAINT [PK_MapsLoggingError] PRIMARY KEY CLUSTERED 
(
	[MapsLoggingErrorId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY], 
    [URL] VARCHAR(MAX) NULL, 
    [FailedCounter] INT NULL, 
    [AttractionTravelStepsId] INT NULL
) ON [PRIMARY]

GO

ALTER TABLE [dbo].[MapsLoggingError]  WITH CHECK ADD  CONSTRAINT [FK_MapsLoggingError_MapsLoggingError] FOREIGN KEY([MapsLoggingErrorId])
REFERENCES [dbo].[MapsLoggingError] ([MapsLoggingErrorId])
GO

ALTER TABLE [dbo].[MapsLoggingError] CHECK CONSTRAINT [FK_MapsLoggingError_MapsLoggingError]
GO

ALTER TABLE [dbo].[MapsLoggingError]  WITH CHECK ADD  CONSTRAINT [FK_MapsLoggingError_MapFeatures] FOREIGN KEY([MapFeaturesId])
REFERENCES [dbo].[MapFeatures] ([MapFeaturesId])
GO

ALTER TABLE [dbo].[MapsLoggingError] CHECK CONSTRAINT [FK_MapsLoggingError_MapFeatures]
GO

ALTER TABLE [dbo].[MapsLoggingError]  WITH CHECK ADD  CONSTRAINT [FK_MapsLoggingError_Maps] FOREIGN KEY([MapsId])
REFERENCES [dbo].[Maps] ([MapsId])
GO

ALTER TABLE [dbo].[MapsLoggingError] CHECK CONSTRAINT [FK_MapsLoggingError_Maps]
GO

ALTER TABLE [dbo].[MapsLoggingError]  WITH CHECK ADD  CONSTRAINT [FK_MapsLoggingError_MapsCredentials] FOREIGN KEY([MapsCredentialsId])
REFERENCES [dbo].[MapsCredentials] ([MapsCredentialsId])
GO

ALTER TABLE [dbo].[MapsLoggingError] CHECK CONSTRAINT [FK_MapsLoggingError_MapsCredentials]
GO