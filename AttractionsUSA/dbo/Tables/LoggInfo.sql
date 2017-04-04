CREATE TABLE [dbo].[LoggInfo](
	[LoggInfoId] [int]  identity(1,1),
	[MethodName] [varchar](250) NULL,
	[Parameters] [varchar](max) NULL,
	[ExceptionMessage] [varchar](max) NULL,
	[ExceptionStackTrace] [varchar](max) NULL,
	[CreatedDate] [datetime] NULL,
	[CreatedBy] [varchar](250) NULL,
	[IsResolved] [bit] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
