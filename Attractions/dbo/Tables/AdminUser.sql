CREATE TABLE [dbo].[AdminUser](
	[AdminUserId] [int] IDENTITY(1,1) NOT NULL,
	[UserName] [varchar](250) NULL,
	[Password] [varchar](250) NULL,
	[CredatedDate] [datetime] NULL,
	[CreatedBy] [varchar](250) NULL,
	[ModifiedDate] [datetime] NULL,
	[ModifiedBy] [varchar](250) NULL,
 CONSTRAINT [PK_AdminUser] PRIMARY KEY CLUSTERED 
(
	[AdminUserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

