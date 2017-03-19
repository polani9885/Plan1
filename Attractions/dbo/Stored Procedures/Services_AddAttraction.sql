CREATE PROCEDURE [dbo].[Services_AddAttraction]
(
	@AttractionName						varchar(500)
    ,@AddressOne							varchar(500)
    ,@AddressTwo							varchar(500)
    ,@CityId								int
    ,@CategoryId							int
    ,@Longitude							varchar(250)
    ,@Latitude							varchar(250)
    ,@PlaceId							varchar(250)
    ,@RankId								int    
    ,@CreatedBy							varchar(250)           
    ,@GoogleSearchText					varchar(500)
    ,@GoogleWebSite						varchar(500)
    ,@GoogleICon							varchar(500)
    ,@GoogleInternational_phone_number	varchar(500)
    ,@Googleadr_address					varchar(2000)
    ,@GoogleName							varchar(500)
    ,@GoogleRating						varchar(50)
    ,@GoogleUser_ratings_total			int
    ,@IsUserPersonalRequest				bit
	,@AttractionTimeExisted				bit
    ,@AttractionsActiveStatusInfo			user_AttractionsActiveStatus READONLY
	,@CategoryList userTable_Category READONLY
)	
AS
BEGIN

DECLARE @AttractionsId INT

INSERT INTO [dbo].[Attractions]
           ([AttractionName]
           ,[AddressOne]
           ,[AddressTwo]
           ,[CityId]
           ,[CategoryId]
           ,[Longitude]
           ,[Latitude]
           ,[PlaceId]
           ,[RankId]
           ,[CreatedDate]
           ,[CreatedBy]           
           ,[GoogleSearchText]
           ,[GoogleWebSite]
           ,[GoogleICon]
           ,[GoogleInternational_phone_number]
           ,[Googleadr_address]
           ,[GoogleName]
           ,[GoogleRating]
           ,[GoogleUser_ratings_total]
           ,[IsUserPersonalRequest])
     VALUES
           (@AttractionName						
           ,@AddressOne							
           ,@AddressTwo							
           ,@CityId								
           ,@CategoryId							
           ,@Longitude							
           ,@Latitude							
           ,@PlaceId							
           ,@RankId								
           ,GETDATE()
           ,@CreatedBy							         
           ,@GoogleSearchText					
           ,@GoogleWebSite						
           ,@GoogleICon							
           ,@GoogleInternational_phone_number	
           ,@Googleadr_address					
           ,@GoogleName							
           ,@GoogleRating						
           ,@GoogleUser_ratings_total			
           ,@IsUserPersonalRequest				
		   )

SET @AttractionsId = @@Identity
IF @AttractionTimeExisted = 1
BEGIN
	INSERT INTO [dbo].[AttractionsActiveStatus]
			   ([AttractionsId]
			   ,[OpenTime]
			   ,[CloseTime]
			   ,[MasterWeekId])
		 SELECT 
			   @AttractionsId		
			   ,OpenTime			
			   ,CloseTime			
			   ,MasterWeekId		
		FROM @AttractionsActiveStatusInfo
					   

END




INSERT INTO [dbo].[MasterCategory]
           ([CategoryId]
           ,[CategoryName])
SELECT    
	(SELECT ISNULL(MAX(CategoryId),1) FROM MasterCategory)
	,CategoryName
FROM @CategoryList
WHERE CategoryName NOT IN 
(
	SELECT CategoryName FROM MasterCategory
)



INSERT INTO [dbo].[AttractionXMasterGoogleType]
           ([AttractionId]
           ,[GoogleTypeId])
    SELECT    
	@AttractionsId
	,CategoryId
FROM MasterCategory
WHERE CategoryName IN 
(
	SELECT CategoryName FROM @CategoryList
)




SELECT @AttractionsId AS AttractionsId

END