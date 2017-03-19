Create PROCEDURE [dbo].[Admin_MasterCityUpdate] 
(
	@CityId int
	,@CityName varchar(250)
    ,@StateId int
    ,@CityShortName varchar(50)
	,@IsDefault Bit
)	
AS
BEGIN
	IF((SELECT 1 FROM MasterCity WHERE CityId = @CityId) = 1)
	BEGIN	

		UPDATE [dbo].[MasterCity]
		   SET [CityName] = @CityName
			  ,[StateId] = @StateId
			  ,[CityShortName] = @CityShortName
			  ,[IsDefault] = @IsDefault
		 WHERE StateId = @StateId

		 
	END
	ELSE
	BEGIN

		INSERT INTO [dbo].[MasterCity]
			   ([CityId]
			   ,[CityName]
			   ,[StateId]
			   ,[CityShortName]
			   ,[IsDefault])
		 VALUES
			   ((SELECT ISNULL(MAX(CityId),0) + 1 FROM MasterCity)
			   ,@CityName
			   ,@StateId
			   ,@CityShortName
			   ,@IsDefault)

	END

	IF(@IsDefault = 1)
	BEGIN
		UPDATE [dbo].[MasterState]
			SET [IsDefault] = 0
		WHERE StateId NOT IN (@StateId)
	END

END