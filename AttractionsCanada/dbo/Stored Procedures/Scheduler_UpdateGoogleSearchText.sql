CREATE PROCEDURE [dbo].[Scheduler_UpdateGoogleSearchText]
(
	@AttractionsId AS INT
	,@GoogleSearchText AS Varchar(500)
)	
AS
BEGIN
	UPDATE Attractions
		SET GoogleSearchText = @GoogleSearchText
			,IsGoogleSearchTextDone = 1
	WHERE AttractionsId = @AttractionsId
END
