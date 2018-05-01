CREATE PROCEDURE UpdateCityCategorySearch 
(
	@CityId AS INT
	,@GoogleTypeID AS INT
)	
AS
BEGIN

	INSERT INTO [dbo].[CityXGoogleType]
           ([CityId]
           ,[GoogleTypeID])
     VALUES
           (@CityId
           ,@GoogleTypeID)

END