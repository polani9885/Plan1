-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[AttractionsOnCityId] 
(
	@CityId INT
)	
AS
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
		WHERE CityId = @CityId
END

