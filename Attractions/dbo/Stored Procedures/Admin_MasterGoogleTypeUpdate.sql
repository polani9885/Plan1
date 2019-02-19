CREATE PROCEDURE [dbo].[Admin_MasterGoogleTypeUpdate]
(
	@GoogleTypeID int
	,@TypeName varchar(250)  
	,@IsNeeded  BIT
	,@DisplayForUser BIT
	,@ViewTime Varchar(50) 
	,@ExtraSearch BIT
)	
AS
BEGIN
	IF((SELECT 1 FROM MasterGoogleType WHERE GoogleTypeID = @GoogleTypeID) = 1)
	BEGIN	

		UPDATE [dbo].[MasterGoogleType]
		   SET TypeName = @TypeName
				,ViewTime = CAST(@ViewTime AS TIME)
				,IsNeeded = @IsNeeded
				,DisplayForUser = @DisplayForUser
				,ExtraSearch = @ExtraSearch
		 WHERE GoogleTypeID = @GoogleTypeID

		 
	END
	ELSE
	BEGIN

		INSERT INTO [dbo].[MasterGoogleType]
			   (GoogleTypeID
			   ,TypeName
			   ,IsNeeded
			   ,DisplayForUser
			   ,ViewTime
			   ,ExtraSearch
			   )
		 VALUES
			   ((SELECT ISNULL(MAX(GoogleTypeID),0) + 1 FROM MasterGoogleType)
			   ,@TypeName
			   ,@IsNeeded
			   ,@DisplayForUser
			   ,CAST(@ViewTime As TIME)
			   ,@ExtraSearch
			   )

	END

	

END