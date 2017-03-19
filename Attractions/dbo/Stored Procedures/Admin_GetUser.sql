CREATE PROCEDURE [dbo].[Admin_GetUser] 
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
END

GO