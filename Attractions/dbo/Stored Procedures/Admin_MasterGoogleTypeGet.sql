CREATE PROCEDURE [dbo].[Admin_MasterGoogleTypeGet]
	
AS
BEGIN
	SELECT 
		GoogleTypeID
		,TypeName
		,IsNeeded
		,DisplayForUser
		,convert(varchar(5),ViewTime,108) As ViewTime
		,ExtraSearch
	FROM [dbo].[MasterGoogleType] MC WITH(NOLOCK)	
END
