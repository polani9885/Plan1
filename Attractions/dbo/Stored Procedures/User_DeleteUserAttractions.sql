CREATE PROCEDURE [dbo].[User_DeleteUserAttractions] 
(
                @UserAttractionId INT
)              
AS
BEGIN


                DELETE FROM [dbo].[UserAttractionsVisit]
      WHERE UserAttractionId = @UserAttractionId

                DELETE FROM [dbo].[UserAttraction]
                WHERE UserAttractionId = @UserAttractionId



END