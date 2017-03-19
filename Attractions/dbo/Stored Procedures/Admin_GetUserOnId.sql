CREATE PROCEDURE Admin_GetUserOnId
(
	@AdminUserId INT
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
  WHERE AdminUserId = @AdminUserId




END
GO