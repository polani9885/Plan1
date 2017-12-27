CREATE TABLE [dbo].[LoggInfo](
	[LoggInfoId] [int] IDENTITY(1,1) NOT NULL,
	[MethodName] [varchar](250) NULL,
	[Parameters] [varchar](max) NULL,
	[ExceptionMessage] [varchar](max) NULL,
	[ExceptionStackTrace] [varchar](max) NULL,
	[CreatedDate] [datetime] NULL,
	[CreatedBy] [varchar](250) NULL,
	[IsResolved] [bit] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
