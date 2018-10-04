CREATE PROCEDURE Scheduler_GetUserRequested 
	
AS
BEGIN	

	SELECT UR.[UserRequestedId]
		  ,UR.[UserTripId]
		  ,UR.[AttractionsId]
		  ,A.GoogleSearchText
		  ,MC.CountryId
		  ,MC.CountryName
		  ,MC.CountryShortName
	FROM [dbo].[UserRequested] UR WITH(NOLOCK)
	JOIN dbo.Attractions A WITH(NOLOCK) ON A.AttractionsId = Ur.AttractionsId
	JOIN Attractions..UserTrip UT ON UT.UserTripId = UR.UserTripId
	JOIN Attractions..MasterCountry MC ON MC.CountryId = UT.CountryId

END