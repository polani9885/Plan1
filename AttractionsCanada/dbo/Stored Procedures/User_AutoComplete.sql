CREATE PROCEDURE User_AutoComplete
(
	@address Varchar(500)
)	
AS
BEGIN
	

	SELECT DISTINCT [AttractionsId] Id
      ,[AttractionName] +', '+ [SearchAddress] description      
	  ,SearchAddress GoogleSearchText 
	FROM [dbo].[Attractions] WITH(NOLOCK)
	WHERE AttractionName LIKE '%'+ @address +'%'
	OR SearchAddress LIKE '%'+ @address +'%'


END