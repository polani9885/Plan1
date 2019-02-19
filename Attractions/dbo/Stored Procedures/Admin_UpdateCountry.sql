CREATE PROCEDURE [dbo].[Admin_UpdateCountry] 
(
	@CountryId AS INT
    ,@CountryName AS Varchar(500)
    ,@CountryShortName AS VARCHAR(50)
    ,@CreatedBy VARCHAR(500)    
    ,@IsDefault AS BIT
    ,@ServerName AS Varchar(50)
    ,@IsWindowsAccess AS BIT
    ,@UserName AS VARCHAR(500)
    ,@Password AS VARCHAR(500)
    ,@DatabaseName AS VARCHAR(500)
    ,@DistanceMeasure AS VARCHAR(50)
    ,@MetersIn AS DECIMAL(32,18)
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
				  ,[ServerName]
				  ,[IsWindowsAccess]
				  ,[UserName]
				  ,[Password]
				  ,[DatabaseName]
				  ,[DistanceMeasure]
				  ,[MetersIn] 
			   )
		 VALUES
			   ((SELECT ISNULL(Max(CountryId),0)+1 FROM MasterCountry)
				,@CountryName
				,@CountryShortName
				,@CreatedBy
				,GETDATE()				
				,@IsDefault
				,@ServerName
				,@IsWindowsAccess
				,@UserName
				,@Password
				,@DatabaseName
				,@DistanceMeasure
				,@MetersIn
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
			  ,[ServerName] = @ServerName
			  ,[IsWindowsAccess] = @IsWindowsAccess
			  ,[UserName] = @UserName
			  ,[Password] = @Password
			  ,[DatabaseName] = @DatabaseName
			  ,[DistanceMeasure] = @DistanceMeasure
			  ,[MetersIn]  = @MetersIn
		 WHERE [CountryId] = @CountryId

		 IF(@IsDefault = 1)
		 BEGIN
			UPDATE [dbo].[MasterCountry]
			   SET [IsDefault] = 0
			 WHERE [CountryId] NOT IN (@CountryId)
		 END

	END
END