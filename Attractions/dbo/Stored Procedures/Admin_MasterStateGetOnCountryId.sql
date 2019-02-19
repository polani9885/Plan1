CREATE PROCEDURE Admin_MasterStateGetOnCountryId
(
	@CountryId INT
)	
AS
BEGIN
	SELECT MS.[StateId]
      ,MS.[StateName]
      ,MS.[CountryId]
      ,MS.[StateShortName]
	  ,MC.CountryName 
	  ,MS.IsDefault
	  ,(SELECT COUNT(*) FROM MasterCity MCC WHERE MCC.StateId = MS.StateId) CityCount
	FROM [dbo].[MasterState] MS
	JOIN dbo.MasterCountry MC ON MC.CountryId = MS.CountryId 
	WHERE MC.CountryId = @CountryId
END
GO
