CREATE PROCEDURE [dbo].[Scheduler_InsertAttractionAuto]
(
	@AddressOne AS varchar(500)
	,@AddressTwo AS varchar(500)
	,@CityName AS Varchar(50)
	,@Longitude AS varchar(250)
	,@Latitude AS varchar(250)
	,@PlaceId AS varchar(250)
	,@CreatedBy AS varchar(50)
	,@AttractionsId AS INT
	,@StateName AS Varchar(50)
	,@CountryId AS INT
	,@StateShortName AS VARCHAR(50)
	,@CityShortName AS VARCHAR(50)
)	
AS
BEGIN

	DECLARE @CityId AS INT 
	DECLARE @StateId AS INT

	SELECT @CityId = MC.CityId FROM Attractions.dbo.MasterCity MC
	JOIN Attractions.dbo.MasterState MS ON MS.StateId = MC.StateId
	WHERE MS.CountryId = @CountryId
	AND MC.CityName = @CityName
	AND MS.StateName = @StateName

	IF ISNULL(@CityId,0) = 0
	BEGIN
		SELECT @StateId = StateId FROM Attractions.dbo.MasterState WHERE StateName = @StateName
		IF ISNULL(@StateId,0) = 0
		BEGIN		
			INSERT INTO Attractions.[dbo].[MasterState]
			   ([StateId]
			   ,[StateName]
			   ,[CountryId]
			   ,[StateShortName]
			   ,[IsDefault])
			VALUES
			   ((SELECT ISNULL(MAX(StateId),0) + 1 FROM Attractions.dbo.MasterState) 
			   ,@StateName
			   ,@CountryId
			   ,@StateShortName
			   ,0)

			SELECT @StateId = StateId FROM Attractions.dbo.MasterState WHERE StateName = @StateName
		END

		SELECT @CityId = MC.CityId FROM Attractions.dbo.MasterCity MC
		WHERE MC.StateId = @StateId

		IF ISNULL(@CityId,0) = 0 
		BEGIN			
			INSERT INTO Attractions.[dbo].[MasterCity]
				   ([CityId]
				   ,[CityName]
				   ,[CityShortName]
				   ,[StateId]
				   ,[IsDefault]
				   )
			 VALUES
				   ((SELECT ISNULL(MAX(StateId),0) + 1 FROM Attractions.dbo.MasterCity) 
				   ,@CityName
				   ,@CityShortName
				   ,@StateId
				   ,0
				   )
			SELECT @CityId = MC.CityId FROM Attractions.dbo.MasterCity MC
		END
	END

	UPDATE [dbo].[Attractions]
	   SET 
		  [AddressOne] = @AddressOne
		  ,[AddressTwo] = @AddressTwo
		  ,[CityId] = @CityId		  
		  ,[Longitude] = @Longitude
		  ,[Latitude] = @Latitude
		  ,[PlaceId] = @PlaceId		  		  
		  ,[ModifiedDate] = getdate()
		  ,[ModifiedBy] = @CreatedBy		  		  
	 WHERE AttractionsId = @AttractionsId

END
