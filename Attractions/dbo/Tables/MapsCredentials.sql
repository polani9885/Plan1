CREATE TABLE [dbo].[MapsCredentials](
	[MapsCredentialsId] [int] IDENTITY(1,1) NOT NULL,
	[MapsId] [int] NULL,
	[UserName] [varchar](500) NULL,
	[Password] [varchar](500) NULL,
	[apiKeyOrapiId] [varchar](1000) NULL,
	[Counter] [int] NULL,
	[IsActive] [bit] NULL,
 [apiCode] VARCHAR(1000) NULL, 
    CONSTRAINT [PK_MapsCredentials] PRIMARY KEY CLUSTERED 
(
	[MapsCredentialsId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

ALTER TABLE [dbo].[MapsCredentials]  WITH CHECK ADD  CONSTRAINT [FK_MapsCredentials_Maps] FOREIGN KEY([MapsId])
REFERENCES [dbo].[Maps] ([MapsId])
GO

ALTER TABLE [dbo].[MapsCredentials] CHECK CONSTRAINT [FK_MapsCredentials_Maps]
GO
