IF NOT EXISTS (SELECT 1 FROM dbo.MapFeatures WITH(NOLOCK) WHERE MapFeaturesId = 1) 
BEGIN

	INSERT INTO [dbo].MapFeatures
           (
		   MapFeaturesId
		   ,FeatureName
           )
     VALUES
           (1
		   ,'Near By'
		   )

END

IF NOT EXISTS (SELECT 1 FROM dbo.MapFeatures WITH(NOLOCK) WHERE MapFeaturesId = 2) 
BEGIN

	INSERT INTO [dbo].MapFeatures
           (
		   MapFeaturesId
		   ,FeatureName
           )
     VALUES
           (
		   2
		   ,'Place Details'
		   )

END

IF NOT EXISTS (SELECT 1 FROM dbo.MapFeatures WITH(NOLOCK) WHERE MapFeaturesId = 3) 
BEGIN

	INSERT INTO [dbo].MapFeatures
           (
		   MapFeaturesId
		   ,FeatureName
           )
     VALUES
           (3
		   ,'Distance Calculation'
		   )

END

IF NOT EXISTS (SELECT 1 FROM dbo.MapFeatures WITH(NOLOCK) WHERE MapFeaturesId = 4) 
BEGIN

	INSERT INTO [dbo].MapFeatures
           (
		   MapFeaturesId
		   ,FeatureName
           )
     VALUES
           (4
		   ,'Auto Complete'
		   )

END