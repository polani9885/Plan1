CREATE PROCEDURE Scheduler_CheckWithAccountNeedToUse 
(
	@FeatureName AS Varchar(50)
	,@CountryId AS INT
)	
AS
BEGIN	

	DECLARE @MapFeaturesId As INT

	SELECT @MapFeaturesId = MapFeaturesId FROM [dbo].[MapFeatures] (NOLOCK) 
	WHERE FeatureName = @FeatureName


	SELECT TOP 1 M.MapsId
			,MFA.API
			,MC.apiKeyOrapiId
			,MC.MapsCredentialsId	
			,MFA.MapFeaturesId	
			,MC.apiCode				
	FROM [dbo].[MapsXAPIXFeature] MFA WITH(NOLOCK)
	JOIN dbo.Maps M WITH(NOLOCK) ON M.MapsId = MFA.MapsId
	JOIN dbo.MapsCredentials MC WITH(NOLOCK) ON MC.MapsId = M.MapsId 
	LEFT JOIN dbo.MapsLogging GML WITH(NOLOCK) ON GML.MapsCredentialsId = MC.MapsCredentialsId
	WHERE MFA.MapFeaturesId = @MapFeaturesId
	AND (MFA.MasterCountryId = @CountryId OR MFA.MasterCountryId Is NULL)
	AND MC.IsActive = 1
	AND (GML.CreatedDate IS NOT NULL OR CAST(ISNULL(GML.CreatedDate,GETDATE()) AS DATE) = CAST(GETDATE() AS DATE))
	AND ISNULL(GML.Counter,0) <= ISNULL(M.MaxCountPerDay,0)
	AND ISNULL(MC.Counter,0) <= ISNULL(M.MaxTotalCount,0)  
END