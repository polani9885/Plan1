CREATE PROCEDURE [dbo].[User_GetUserAttractionSaved]
(
                @UserId INT
)
AS
BEGIN

                SELECT [UserAttractionId]
                                  ,[UserId]
                                  ,[TourName]
                                  ,[TotalExpenditure]
                                  ,[TotalDistance]
                                  ,[NoOfHours]
                                  ,[NoOfNights]
                                  ,[CreatedUTCDate]
                                  ,[CreatedBy]
                                  ,[ModifiedUTCDate]
                                  ,[ModifiedBy]
                                  ,[NoOfLunchSlots]
                                  ,[NoOfBreakFeastSlots]
                                  ,[NoOfDinnerSlots]
                                  ,[NoOfHotelsVisited]
                                  ,[TravelDate]
                                  ,[StartLocationId]
                                  ,[EndLocationId]
                  FROM [dbo].[UserAttraction]
                  WHERE UserId = @UserId

END