CREATE PROCEDURE Admin_MasterStateUpdate 
(
	@StateId int
	,@StateName varchar(250)
    ,@CountryId int
    ,@StateShortName varchar(50)
	,@IsDefault Bit
)	
AS
BEGIN
	IF((SELECT 1 FROM MasterState WHERE StateId = @StateId) = 1)
	BEGIN	

		UPDATE [dbo].[MasterState]
		   SET [StateName] = @StateName
			  ,[CountryId] = @CountryId
			  ,[StateShortName] = @StateShortName
			  ,[IsDefault] = @IsDefault
		 WHERE StateId = @StateId

		 
	END
	ELSE
	BEGIN

		INSERT INTO [dbo].[MasterState]
			   ([StateId]
			   ,[StateName]
			   ,[CountryId]
			   ,[StateShortName]
			   ,[IsDefault])
		 VALUES
			   ((SELECT ISNULL(MAX(StateId),0) + 1 FROM MasterState)
			   ,@StateName
			   ,@CountryId
			   ,@StateShortName
			   ,@IsDefault)

	END

	IF(@IsDefault = 1)
	BEGIN
		UPDATE [dbo].[MasterState]
			SET [IsDefault] = 0
		WHERE StateId NOT IN (@StateId)
	END

END
GO