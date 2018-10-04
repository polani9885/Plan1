CREATE PROCEDURE Scheduler_DeleteUserRequested 
(
	@UserRequestedId AS INT
)	
AS
BEGIN	
	DELETE FROM [dbo].[UserRequested]
	WHERE UserRequestedId = @UserRequestedId	
END