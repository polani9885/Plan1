CREATE PROCEDURE Admin_CheckUserExist 
	@UserName Varchar(250)
	,@AdminUserId INT
AS
BEGIN	

	IF(@AdminUserId = 0)
	BEGIN
		SELECT [AdminUserId]
		  ,[UserName]
		  ,[Password]
		  ,[CredatedDate]
		  ,[CreatedBy]
		  ,[ModifiedDate]
		  ,[ModifiedBy]
		FROM [dbo].[AdminUser]
		WHERE UserName = @UserName
	END
	ELSE
	BEGIN
		SELECT [AdminUserId]
		  ,[UserName]
		  ,[Password]
		  ,[CredatedDate]
		  ,[CreatedBy]
		  ,[ModifiedDate]
		  ,[ModifiedBy]
		FROM [dbo].[AdminUser]
		WHERE UserName = @UserName
		AND AdminUserId NOT IN (@AdminUserId)
	END
END
GO
