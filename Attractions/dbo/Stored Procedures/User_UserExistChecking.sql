CREATE PROCEDURE [dbo].[User_UserExistChecking] 
(
                @UserName Varchar(250)
)
AS
BEGIN
                SELECT UserName FROM [User] WHERE UserName = @UserName
END