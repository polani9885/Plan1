CREATE PROCEDURE [dbo].[Admin_UpdateCountry] 
(
	@CountryId INT
	,@CountryName Varchar(250)
	,@CountryShortName Varchar(50)	
	,@CreatedBy Varchar(50)
	,@IsDefault BIT
)
AS
BEGIN
	IF(@CountryId = 0)
	BEGIN		
		
		INSERT INTO [dbo].[MasterCountry]
			   ([CountryId]
			   ,[CountryName]
			   ,[CountryShortName]
			   ,[CreatedBy]
			   ,[CreatedDate]
			   ,[IsDefault] 
			   )
		 VALUES
			   ((SELECT ISNULL(Max(CountryId),0)+1 FROM MasterCountry)
			   ,@CountryName
			   ,@CountryShortName
			   ,@CreatedBy
			   ,GETDATE()
			   ,@IsDefault 
			   )
	END
	ELSE
	BEGIN		

		UPDATE [dbo].[MasterCountry]
		   SET [CountryName] = @CountryName
			  ,[CountryShortName] = @CountryShortName			  
			  ,[ModifiedBy] = @CreatedBy
			  ,[ModifiedDate] = GETDATE()
			  ,[IsDefault] = @IsDefault 
		 WHERE [CountryId] = @CountryId

		 IF(@IsDefault = 1)
		 BEGIN
			UPDATE [dbo].[MasterCountry]
			   SET [IsDefault] = 0
			 WHERE [CountryId] NOT IN (@CountryId)
		 END

	END
END