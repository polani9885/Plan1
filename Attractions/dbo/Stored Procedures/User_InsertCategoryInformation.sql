
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE User_InsertCategoryInformation
(
	@UserTripId AS Int
	,@Category AS userTable_Category READONLY
)	
AS
BEGIN
	DELETE FROM dbo.UserTripCategory WHERE UserTripId = @UserTripId


	INSERT INTO [dbo].[UserTripCategory]
           ([UserTripId]
           ,[GoogleTypeID]
           ,[TypeName]
           ,[CreateDate])
     SELECT
           @UserTripId
           ,CategoryId
           ,CategoryName
           ,GETDATE()
	FROM @Category


END

