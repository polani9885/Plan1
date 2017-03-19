CREATE PROCEDURE Admin_MasterStateGetOnStateId 
(
	@StateId INT
)	
AS
BEGIN
	SELECT MS.[StateId]
      ,MS.[StateName]
      ,MS.[CountryId]
      ,MS.[StateShortName]
	  ,MC.CountryName 
	  ,MS.IsDefault
	FROM [dbo].[MasterState] MS
	JOIN dbo.MasterCountry MC ON MC.CountryId = MS.CountryId 
	WHERE MS.StateId = @StateId
END
GO