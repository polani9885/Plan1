
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[AttractionsCheckExists] 
(
	@AttractionsId INT
	,@CityId int
	,@AttractionName varchar(250)
)	
AS
BEGIN
	IF(@CityId = 0)
	BEGIN
		SELECT [AttractionsId]
			  ,[AttractionName]			  
			  ,[CityId]			  
			  ,[Longitude]
			  ,[Latitude]			  
			  ,[RankId]
			  ,[CreatedDate]
			  ,[CreatedBy]
			  ,[ModifiedDate]
			  ,[ModifiedBy]
			  ,[SearchAddress]
			  ,[WebSite]			  
			  ,[phone_number]			  
			  ,[Rating]			  
		  FROM [dbo].[Attractions]		
		WHERE AttractionName = @AttractionName
		
	END
	ELSE
	BEGIN
		SELECT [AttractionsId]
			  ,[AttractionName]			  
			  ,[CityId]			  
			  ,[Longitude]
			  ,[Latitude]			  
			  ,[RankId]
			  ,[CreatedDate]
			  ,[CreatedBy]
			  ,[ModifiedDate]
			  ,[ModifiedBy]
			  ,[SearchAddress]
			  ,[WebSite]			  
			  ,[phone_number]			  
			  ,[Rating]			  
		  FROM [dbo].[Attractions]		
		WHERE AttractionName = @AttractionName
		AND AttractionsId NOT IN (@AttractionsId)		
	END
END


