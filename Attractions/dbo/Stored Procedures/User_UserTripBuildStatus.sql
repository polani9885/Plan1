CREATE PROCEDURE User_UserTripBuildStatus
(
	@UserTripId AS INT
)	
AS
BEGIN


	SELECT [UserTripBuildStatusId]
		  ,[UserTripId]
		  ,[IsError]
		  ,[UserTripBuildMessageId]
		  ,[FormattedMessage]
		  ,[CreatedDate]
	  FROM [dbo].[UserTripBuildStatus]
	WHERE UserTripId = @UserTripId


END