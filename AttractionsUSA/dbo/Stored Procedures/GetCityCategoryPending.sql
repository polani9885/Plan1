CREATE PROCEDURE GetCityCategoryPending 
(
	@CityId AS INT
)	
AS
BEGIN
	
	SELECT MGT.[GoogleTypeID]
      ,MGT.[TypeName]
      ,MGT.[IsNeeded]
	FROM Attractions.[dbo].[MasterGoogleType] MGT WITH (NOLOCK)	
	WHERE MGT.IsNeeded = 1
	AND [GoogleTypeID] NOT IN (SELECT [GoogleTypeID] FROM CityXGoogleType WITH(NOLOCK) WHERE CityId = @CityId)

END