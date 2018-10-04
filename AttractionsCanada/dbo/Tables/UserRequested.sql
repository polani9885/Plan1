CREATE TABLE [dbo].[UserRequested](
	[UserRequestedId] [bigint] IDENTITY(1,1) NOT NULL,
	[UserTripId] [int] NULL,
	[AttractionsId] [int] NULL,
 CONSTRAINT [PK_UserRequested] PRIMARY KEY CLUSTERED 
(
	[UserRequestedId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
