CREATE PROCEDURE Admin_MasterStateCheckExists 
(
	@StateId int
	,@StateName varchar(250)
)	
AS
BEGIN
	IF(@StateId = 0)
	BEGIN
		SELECT MS.[StateId]
		  ,MS.[StateName]
		  ,MS.[CountryId]
		  ,MS.[StateShortName]
		  ,MC.CountryName 
		FROM [dbo].[MasterState] MS
		JOIN dbo.MasterCountry MC ON MC.CountryId = MS.CountryId 
		WHERE MS.StateName = @StateName
		
	END
	ELSE
	BEGIN
		SELECT MS.[StateId]
		  ,MS.[StateName]
		  ,MS.[CountryId]
		  ,MS.[StateShortName]
		  ,MC.CountryName 
		FROM [dbo].[MasterState] MS
		JOIN dbo.MasterCountry MC ON MC.CountryId = MS.CountryId 
		WHERE MS.StateId NOT IN (@StateId)
		AND MS.StateName = @StateName		
	END
END
GO