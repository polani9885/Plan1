CREATE PROCEDURE [dbo].[User_UserAttractionUpdate]
(
                   @UserAttractionId AS INT
      ,@UserId AS INT
      ,@TourName AS Varchar(500)
      ,@TotalExpenditure AS Money
      ,@TotalDistance AS INT
      ,@NoOfHours AS INT
      ,@NoOfNights AS INT      
      ,@CreatedBy AS Varchar(250)      
      ,@NoOfLunchSlots AS INT
      ,@NoOfBreakFeastSlots AS INT
      ,@NoOfDinnerSlots AS INT
      ,@NoOfHotelsVisited AS INT
      ,@TravelDate AS INT
      ,@StartLocationId AS INT
      ,@EndLocationId AS INT
                  ,@AttractionInformation AS userTable_OrderAttraction READONLY
)              
AS
BEGIN

IF (@UserAttractionId = 0)
BEGIN
                INSERT INTO [dbo].[UserAttraction]
           ([UserId]
           ,[TourName]
           ,[TotalExpenditure]
           ,[TotalDistance]
           ,[NoOfHours]
           ,[NoOfNights]
           ,[CreatedUTCDate]
           ,[CreatedBy]                      
           ,[NoOfLunchSlots]
           ,[NoOfBreakFeastSlots]
           ,[NoOfDinnerSlots]
           ,[NoOfHotelsVisited]
           ,[TravelDate]
           ,[StartLocationId]
           ,[EndLocationId])
     VALUES
           (@UserId
           ,@TourName
           ,@TotalExpenditure
           ,@TotalDistance
           ,@NoOfHours
           ,@NoOfNights
           ,GETUTCDATE()
           ,@CreatedBy           
           ,@NoOfLunchSlots
           ,@NoOfBreakFeastSlots
           ,@NoOfDinnerSlots
           ,@NoOfHotelsVisited
           ,@TravelDate
           ,@StartLocationId
           ,@EndLocationId)

                                   SET @UserAttractionId = @@IDENTITY

END
ELSE
BEGIN
                UPDATE [dbo].[UserAttraction]
                   SET UserId = @UserId
                                  ,TourName = @TourName
                                  ,TotalExpenditure = @TotalExpenditure
                                  ,TotalDistance = @TotalDistance
                                  ,NoOfHours = @NoOfHours
                                  ,NoOfNights = @NoOfNights                      
                                  ,ModifiedUTCDate = GETUTCDATE()
                                  ,ModifiedBy = @CreatedBy
                                  ,NoOfLunchSlots = @NoOfLunchSlots
                                  ,NoOfBreakFeastSlots = @NoOfBreakFeastSlots
                                  ,NoOfDinnerSlots = @NoOfDinnerSlots
                                  ,NoOfHotelsVisited = @NoOfHotelsVisited
                                  ,TravelDate = @TravelDate
                                  ,StartLocationId = @StartLocationId
                                  ,EndLocationId = @EndLocationId
                WHERE UserAttractionId = @UserAttractionId
END



                DELETE FROM [dbo].[UserAttractionsVisit]
    WHERE UserAttractionId = @UserAttractionId



                INSERT INTO [dbo].[UserAttractionsVisit]
           ([UserAttractionId]
           ,[SourceAttractionId]
           ,[DestinationAttractionId]
           ,[TravelModeId]
           ,[TravelTime]
           ,[Distance]
           ,[CreatedUTCDate]
           ,[CreatedBy]
           )
                SELECT 
                                @UserAttractionId
                                ,[SourceAttractionId]
                                ,[DestinationAttractionId]
                                ,[TravelModeId]
                                ,[TravelTime]
                                ,[Distance]
                                ,GETUTCDATE()
                                ,@CreatedBy
                FROM @AttractionInformation
    








END