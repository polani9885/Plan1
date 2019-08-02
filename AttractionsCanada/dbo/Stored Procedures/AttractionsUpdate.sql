
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
Create PROCEDURE [dbo].[AttractionsUpdate] 
(
	@AttractionsId INT
	,@AttractionName varchar(500)
	,@AddressOne varchar(500)
	,@AddressTwo varchar(500)
	,@CityId int
	,@CategoryId int
	,@Longitude varchar(250)
	,@Latitude varchar(250)
	,@PlaceId varchar(250)
	,@RankId int
	,@CreatedBy varchar(250)	
	,@GoogleSearchText varchar(500)
	,@GoogleWebSite varchar(500)
	,@GoogleICon varchar(500)
	,@GoogleInternational_phone_number varchar(500)
	,@Googleadr_address varchar(2000)
	,@GoogleName varchar(500)
	,@GoogleRating varchar(50)	
)	
AS
BEGIN
	IF((SELECT 1 FROM Attractions WHERE AttractionsId = @AttractionsId) = 1)
	BEGIN			

		UPDATE [dbo].[Attractions]
		   SET [AttractionName] = @AttractionName			  
			  ,[CityId] = @CityId			  
			  ,[Longitude] = @Longitude
			  ,[Latitude] = @Latitude			  
			  ,[RankId] = @RankId			  
			  ,[ModifiedDate] = getdate()
			  ,[ModifiedBy] = @CreatedBy
			  ,[SearchAddress] = @GoogleSearchText
			  ,[WebSite] = @GoogleWebSite			  
			  ,[phone_number] = @GoogleInternational_phone_number			  
			  ,[Rating] = @GoogleRating			  
		 WHERE AttractionsId = @AttractionsId




		 
	END
	ELSE
	BEGIN

		

		INSERT INTO [dbo].[Attractions]
				   ([AttractionName]				   
				   ,[CityId]				   
				   ,[Longitude]
				   ,[Latitude]				   
				   ,[RankId]
				   ,[CreatedDate]
				   ,[CreatedBy]				   
				   ,[SearchAddress]
				   ,[WebSite]				   
				   ,[phone_number]				   
				   ,[Rating]
				   )
			 VALUES
				   (@AttractionName				   
				   ,@CityId				   
				   ,@Longitude
				   ,@Latitude				   
				   ,@RankId
				   ,getdate()
				   ,@CreatedBy				   
				   ,@GoogleSearchText
				   ,@GoogleWebSite				   
				   ,@GoogleInternational_phone_number				   
				   ,@GoogleRating
				   )
	END	

END


