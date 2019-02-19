CREATE PROCEDURE [dbo].[Admin_MergeStates] 
(
	@SourceStateId INT,
	@DestinationStateId INT
)	
AS
BEGIN
	UPDATE dbo.MasterCity	
		SET StateId =  @DestinationStateId
	WHERE StateId = @SourceStateId

	DELETE FROM dbo.MasterState WHERE StateId = @SourceStateId
END
