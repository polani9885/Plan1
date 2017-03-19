CREATE PROCEDURE Admin_UpdateUser 
	@UserName Varchar(250)
	,@Password Varchar(250)
	,@CreatedBy Varchar(250)	
	,@AdminUserId INT
AS
BEGIN
	IF(@AdminUserId = 0)
	BEGIN
		INSERT INTO [dbo].[AdminUser]
			   ([UserName]
			   ,[Password]
			   ,[CredatedDate]
			   ,[CreatedBy]
			   )
		 VALUES
			   (@UserName
			   ,@Password
			   ,getdate()
			   ,@CreatedBy
			   )
	END
	ELSE
	BEGIN

		UPDATE [dbo].[AdminUser]
		SET [UserName] = @UserName
		  ,[Password] = @Password      
		  ,[ModifiedDate] = getdate()
		  ,[ModifiedBy] = @CreatedBy
		WHERE AdminUserId = @AdminUserId 

	END
END
GO