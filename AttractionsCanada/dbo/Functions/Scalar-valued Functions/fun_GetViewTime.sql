CREATE FUNCTION [dbo].[fun_GetViewTime] 
(
	@NextAttractionId AS INT
)
RETURNS TIME
AS
BEGIN

	DECLARE @ResTimeRequiredToView AS TIME
	DECLARE @AverageMinimumTime AS TIME = '02:00:00.0000000'
	
	
	IF EXISTS( SELECT 1 FROM AttractionAverageTime WITH(NOLOCK) WHERE AttractionsId = @NextAttractionId)
	BEGIN
		SET @ResTimeRequiredToView = (SELECT AverageTime FROM AttractionAverageTime WITH(NOLOCK) WHERE AttractionsId = @NextAttractionId)
	END
	ELSE IF EXISTS 
		(
			SELECT 1
				FROM AttractionXCategory AXM
				JOIN Attractions..MasterGoogleType MG WITH(NOLOCK) ON MG.GoogleTypeID = AXM.CategoryId
				WHERE AXM.AttractionId = @NextAttractionId 
				AND MG.ViewTime > CAST('00:01' AS TIME)
		)
	BEGIN
		SET @ResTimeRequiredToView = 
			(
				SELECT MAX(ViewTime) 
				FROM AttractionXCategory AXM
				JOIN Attractions..MasterGoogleType MG WITH(NOLOCK) ON MG.GoogleTypeID = AXM.CategoryId
				WHERE AXM.AttractionId = @NextAttractionId 							
			)
							
	END
	ELSE IF EXISTS
		(
			SELECT 1 
			FROM AttractionXCategory AXM WITH(NOLOCK)
			JOIN Attractions..MasterGoogleType MG WITH(NOLOCK) ON MG.GoogleTypeID = AXM.CategoryId
			JOIN Attractions..MasterCategory MC WITH(NOLOCK) ON MC.CategoryId = MG.MasterCategoryId
			WHERE AXM.AttractionId = @NextAttractionId 	
			AND MC.ViewTime > CAST('00:01' AS TIME)  							
		)
	BEGIN
		SET @ResTimeRequiredToView = 
				(
					SELECT MAX(MC.ViewTime) 
					FROM AttractionXCategory AXM WITH(NOLOCK)
					JOIN Attractions..MasterGoogleType MG WITH(NOLOCK) ON MG.GoogleTypeID = AXM.CategoryId
					JOIN Attractions..MasterCategory MC WITH(NOLOCK) ON MC.CategoryId = MG.MasterCategoryId
					WHERE AXM.AttractionId = @NextAttractionId 	
					AND MC.ViewTime > CAST('00:01' AS TIME)   							
				)
	END
	ELSE
	BEGIN
		SET @ResTimeRequiredToView = @AverageMinimumTime
	END	

	RETURN @ResTimeRequiredToView
	
END


