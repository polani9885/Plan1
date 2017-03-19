-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[public_FilterAttractions]
	@EnterLocationName Varchar(250),
	@CategoryID userTable_Category ReadOnly 
AS
BEGIN


SELECT TOP 30 [AttractionsId]
      ,[AttractionName]
      ,[AddressOne]
      ,[AddressTwo]
      ,[CityId]
      ,[CategoryId]
      ,[Longitude]
      ,[Latitude]
      ,[PlaceId]
      ,[RankId]
      ,[CreatedDate]
      ,[CreatedBy]
      ,[ModifiedDate]
      ,[ModifiedBy]
	  ,GoogleSearchText
  FROM [dbo].[Attractions]
  WHERE CategoryId NOT IN (SELECT CategoryID FROM @CategoryID)
  AND GoogleSearchText IS NOT NULL

END
