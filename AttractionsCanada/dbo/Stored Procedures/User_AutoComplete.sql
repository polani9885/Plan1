CREATE PROCEDURE User_AutoComplete
(
	@address Varchar(500)
)	
AS
BEGIN
	

	SELECT DISTINCT [AttractionsId] Id
      ,[AttractionName] +', '+ [GoogleSearchText] description      
	  ,[GoogleSearchText] GoogleSearchText 
	FROM [dbo].[Attractions] WITH(NOLOCK)
	WHERE AttractionName LIKE '%'+ @address +'%'
	OR GoogleSearchText LIKE '%'+ @address +'%'


END