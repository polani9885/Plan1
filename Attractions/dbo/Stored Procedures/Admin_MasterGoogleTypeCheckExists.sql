CREATE PROCEDURE [dbo].[Admin_MasterGoogleTypeCheckExists]
(
	@GoogleTypeID int
	,@TypeName varchar(250)   
)	
AS
BEGIN
	IF(@GoogleTypeID = 0)
	BEGIN
		SELECT MC.GoogleTypeID
		  ,MC.TypeName		  
		FROM [dbo].MasterGoogleType MC	WITH(NOLOCK)	
		WHERE MC.TypeName = @TypeName
		
	END
	ELSE
	BEGIN
		SELECT MC.GoogleTypeID
		  ,MC.TypeName		  	  
		FROM [dbo].MasterGoogleType MC WITH(NOLOCK)		
		WHERE MC.GoogleTypeID NOT IN (@GoogleTypeID)
		AND MC.TypeName = @TypeName		
	END
END