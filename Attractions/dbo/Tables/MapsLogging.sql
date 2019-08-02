CREATE TABLE [dbo].[MapsLogging](
	[MapsLoggingId] [int] IDENTITY(1,1) NOT NULL,
	[MapsCredentialsId] [int] NULL,
	[CreatedDate] [datetime] NULL,
	[Counter] [int] NULL,
	[FailedCount] [int] NULL,
 CONSTRAINT [PK_MapsLogging] PRIMARY KEY CLUSTERED 
(
	[MapsLoggingId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

ALTER TABLE [dbo].[MapsLogging]  WITH CHECK ADD  CONSTRAINT [FK_MapsLogging_MapsCredentials] FOREIGN KEY([MapsCredentialsId])
REFERENCES [dbo].[MapsCredentials] ([MapsCredentialsId])
GO

ALTER TABLE [dbo].[MapsLogging] CHECK CONSTRAINT [FK_MapsLogging_MapsCredentials]
GO

ALTER TABLE [dbo].[MapsLogging]  WITH CHECK ADD  CONSTRAINT [FK_MapsLogging_MapsLogging] FOREIGN KEY([MapsLoggingId])
REFERENCES [dbo].[MapsLogging] ([MapsLoggingId])
GO

ALTER TABLE [dbo].[MapsLogging] CHECK CONSTRAINT [FK_MapsLogging_MapsLogging]
GO
