IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'accounting') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (1
		   ,1
           ,'accounting'
           ,0
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'airport') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (2
		   ,1
           ,'airport'
           ,1
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'amusement_park') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (3
		   ,1
           ,'amusement_park'
           ,1
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'aquarium') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (4
		   ,1
           ,'aquarium'
           ,1
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'art_gallery') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (5
		   ,1
           ,'art_gallery'
           ,1
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'atm') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (6
		   ,1
           ,'atm'
           ,0
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'bakery') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (7
		   ,1
           ,'bakery'
           ,1
           ,1)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'bank') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (8
		   ,1
           ,'bank'
           ,0
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'bar') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (9
		   ,1
           ,'bar'
           ,1
           ,1)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'beauty_salon') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (10
		   ,1
           ,'beauty_salon'
           ,0
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'bicycle_store') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           ([MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (11
		   ,1
           ,'bicycle_store'
           ,0
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'book_store') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (12
		   ,1
           ,'book_store'
           ,0
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'bowling_alley') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (13
		   ,1
           ,'bowling_alley'
           ,1
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'bus_station') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (14
		   ,1
           ,'bus_station'
           ,1
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'cafe') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (15
		   ,1
           ,'cafe'
           ,1
           ,1)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'campground') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (16
		   ,1
           ,'campground'
           ,1
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'car_dealer') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (17
		   ,1
           ,'car_dealer'
           ,0
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'car_rental') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (18
		   ,1
           ,'car_rental'
           ,1
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'car_repair') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (19
		   ,1
           ,'car_repair'
           ,0
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'car_wash') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (20
		   ,1
           ,'car_wash'
           ,0
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'casino') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (21
		   ,1
           ,'casino'
           ,1
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'cemetery') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (22
		   ,1
           ,'cemetery'
           ,0
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'church') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (23
		   ,1
           ,'church'
           ,1
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'city_hall') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (24
		   ,1
           ,'city_hall'
           ,0
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'clothing_store') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (25
		   ,1
           ,'clothing_store'
           ,0
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'convenience_store') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (26
		   ,1
           ,'convenience_store'
           ,0
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'courthouse') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (27
		   ,1
           ,'courthouse'
           ,0
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'dentist') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (28
		   ,1
           ,'dentist'
           ,0
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'department_store') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (29
		   ,1
           ,'department_store'
           ,0
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'doctor') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (30
		   ,1
           ,'doctor'
           ,0
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'electrician') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (31
		   ,1
           ,'electrician'
           ,0
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'electronics_store') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (32
		   ,1
           ,'electronics_store'
           ,0
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'embassy') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (33
		   ,1
           ,'embassy'
           ,0
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'establishment') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (34
		   ,1
           ,'establishment'
           ,0
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'finance') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (35
		   ,1
           ,'finance'
           ,0
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'fire_station') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (36
		   ,1
           ,'fire_station'
           ,0
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'florist') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (37
		   ,1
           ,'florist'
           ,0
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'food') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (38
		   ,1
           ,'food'
           ,1
           ,1)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'funeral_home') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (39
		   ,1
           ,'funeral_home'
           ,0
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'furniture_store') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (40
		   ,1
           ,'furniture_store'
           ,0
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'gas_station') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (41
		   ,1
           ,'gas_station'
           ,0
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'general_contractor') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (42
		   ,1
           ,'general_contractor'
           ,0
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'grocery_or_supermarket') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (43
		   ,1
           ,'grocery_or_supermarket'
           ,0
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'gym') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (44
		   ,1
           ,'gym'
           ,0
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'hair_care') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (45
		   ,1
           ,'hair_care'
           ,0
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'hardware_store') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (46
		   ,1
           ,'hardware_store'
           ,0
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'health') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (47
		   ,1
           ,'health'
           ,0
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'hindu_temple') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (48
		   ,1
           ,'hindu_temple'
           ,1
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'home_goods_store') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (49
		   ,1
           ,'home_goods_store'
           ,0
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'hospital') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (50
		   ,1
           ,'hospital'
           ,0
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'insurance_agency') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (51
		   ,1
           ,'insurance_agency'
           ,0
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'jewelry_store') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (52
		   ,1
           ,'jewelry_store'
           ,0
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'laundry') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (53
		   ,1
           ,'laundry'
           ,0
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'lawyer') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (54
		   ,1
           ,'lawyer'
           ,0
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'library') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (55
		   ,1
           ,'library'
           ,0
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'liquor_store') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (56
		   ,1
           ,'liquor_store'
           ,0
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'local_government_office') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (57
		   ,1
           ,'local_government_office'
           ,0
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'locksmith') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (58
		   ,1
           ,'locksmith'
           ,0
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'lodging') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (59
		   ,1
           ,'lodging'
           ,1
           ,1)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'meal_delivery') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (60
		   ,1
           ,'meal_delivery'
           ,1
           ,1)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'meal_takeaway') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (61
		   ,1
           ,'meal_takeaway'
           ,1
           ,1)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'mosque') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (62
		   ,1
           ,'mosque'
           ,0
           ,0)
END



IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'movie_rental') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (63
		   ,1
           ,'movie_rental'
           ,0
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'movie_theater') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (64
		   ,1
           ,'movie_theater'
           ,0
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'moving_company') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (65
		   ,1
           ,'moving_company'
           ,0
           ,0)
END



IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'museum') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (66
		   ,1
           ,'museum'
           ,1
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'night_club') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (67
		   ,1
           ,'night_club'
           ,0
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'painter') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (68
		   ,1
           ,'painter'
           ,0
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'park') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (69
		   ,1
           ,'park'
           ,1
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'parking') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (70
		   ,1
           ,'parking'
           ,0
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'pet_store') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (71
		   ,1
           ,'pet_store'
           ,0
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'pharmacy') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (72
		   ,1
           ,'pharmacy'
           ,0
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'physiotherapist') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (73
		   ,1
           ,'physiotherapist'
           ,0
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'place_of_worship') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (74
		   ,1
           ,'place_of_worship'
           ,1
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'plumber') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (75
		   ,1
           ,'plumber'
           ,0
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'police') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (76
		   ,1
           ,'police'
           ,0
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'post_office') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (77
		   ,1
           ,'post_office'
           ,0
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'real_estate_agency') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (78
		   ,1
           ,'real_estate_agency'
           ,0
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'restaurant') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (79
		   ,1
           ,'restaurant'
           ,1
           ,1)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'roofing_contractor') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (80
		   ,1
           ,'roofing_contractor'
           ,0
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'rv_park') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (81
		   ,1
           ,'rv_park'
           ,0
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'school') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (82
		   ,1
           ,'school'
           ,0
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'shoe_store') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (83
		   ,1
           ,'shoe_store'
           ,0
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'shopping_mall') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (84
		   ,1
           ,'shopping_mall'
           ,0
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'spa') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (85
		   ,1
           ,'spa'
           ,1
           ,1)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'stadium') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (86
		   ,1
           ,'stadium'
           ,1
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'storage') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (87
		   ,1
           ,'storage'
           ,0
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'store') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (88
		   ,1
           ,'store'
           ,0
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'subway_station') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (89
		   ,1
           ,'subway_station'
           ,1
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'synagogue') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (90
		   ,1
           ,'synagogue'
           ,1
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'taxi_stand') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (91
		   ,1
           ,'taxi_stand'
           ,1
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'train_station') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (92
		   ,1
           ,'train_station'
           ,1
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'transit_station') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (93
		   ,1
           ,'transit_station'
           ,1
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'travel_agency') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (94
		   ,1
           ,'travel_agency'
           ,0
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'veterinary_care') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (95
		   ,1
           ,'veterinary_care'
           ,0
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'zoo') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (96
		   ,1
           ,'zoo'
           ,1
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'room') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (97
		   ,1
           ,'room'
           ,1
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'point_of_interest') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (98
		   ,1
           ,'point_of_interest'
           ,0
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'supermarket') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (99
		   ,1
           ,'supermarket'
           ,0
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'country') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (100
		   ,1
           ,'country'
           ,0
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'political') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (101
		   ,1
           ,'political'
           ,0
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'premise') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (102
		   ,1
           ,'premise'
           ,0
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'locality') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (103
		   ,1
           ,'locality'
           ,0
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'street_address') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (104
		   ,1
           ,'street_address'
           ,0
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'light_rail_station') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (
		   105
		   ,1
           ,'light_rail_station'
           ,0
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'university') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (106
		   ,1
           ,'university'
           ,0
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'neighborhood') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (107
		   ,1
           ,'neighborhood'
           ,0
           ,0)
END



IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'route') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (108,
		   1
           ,'route'
           ,0
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'natural_feature') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (109
		   ,1
           ,'natural_feature'
           ,0
           ,0)
END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 1 AND TypeName = 'subpremise') 
BEGIN
	INSERT INTO [dbo].[MapsXCategory]
           (MapsXCategoryId
		   ,[MapsId]
           ,[TypeName]
           ,[IsNeeded]
           ,[ExtraSearch])
     VALUES
           (110
		   ,1
           ,'subpremise'
           ,0
           ,0)
END
