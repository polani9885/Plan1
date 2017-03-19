CREATE PROCEDURE Admin_AttractionsActiveStatusGetOnAttractionsActiveStatusId 
(
	@AttractionsActiveStatusId AS INT
)
AS
BEGIN


SELECT [AttractionsActiveStatusId]
      ,[AttractionsId]
      ,CAST ([OpenTime] AS Varchar(50)) OpenTime
      ,CAST([CloseTime] AS Varchar(50)) CloseTime
      ,[MasterWeekId]
  FROM [dbo].[AttractionsActiveStatus]
  WHERE AttractionsActiveStatusId = @AttractionsActiveStatusId



END
GO