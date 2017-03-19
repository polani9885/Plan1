CREATE PROCEDURE Admin_CheckUser 
(
	@UserName Varchar(250),
	@Password Varchar(250)
)
AS
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
	  AND [Password] = @Password


END
