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
           (MapsXCategoryId
		   ,[MapsId]
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

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'eat-drink')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(413
			,3
			,'eat-drink'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'restaurant')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(414
			,3
			,'restaurant'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'snacks-fast-food')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(415
			,3
			,'snacks-fast-food'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'bar-pub')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(416
			,3
			,'bar-pub'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'coffee-tea')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(417
			,3
			,'coffee-tea'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'coffee')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(418
			,3
			,'coffee'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'tea')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(419
			,3
			,'tea'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'going-out')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(420
			,3
			,'going-out'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'dance-night-club')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(421
			,3
			,'dance-night-club'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cinema')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(422
			,3
			,'cinema'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'theatre-music-culture')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(423
			,3
			,'theatre-music-culture'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'casino')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(424
			,3
			,'casino'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'sights-museums')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(425
			,3
			,'sights-museums'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'landmark-attraction')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(426
			,3
			,'landmark-attraction'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'museum')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(427
			,3
			,'museum'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'transport')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(428
			,3
			,'transport'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'airport')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(429
			,3
			,'airport'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'railway-station')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(430
			,3
			,'railway-station'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'public-transport')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(431
			,3
			,'public-transport'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'ferry-terminal')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(432
			,3
			,'ferry-terminal'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'taxi-stand')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(433
			,3
			,'taxi-stand'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'accommodation')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(434
			,3
			,'accommodation'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'hotel')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(435
			,3
			,'hotel'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'motel')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(436
			,3
			,'motel'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'hostel')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(437
			,3
			,'hostel'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'camping')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(438
			,3
			,'camping'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'shopping')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(439
			,3
			,'shopping'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'kiosk-convenience-store')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(440
			,3
			,'kiosk-convenience-store'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'wine-and-liquor')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(441
			,3
			,'wine-and-liquor'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'mall')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(442
			,3
			,'mall'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'department-store')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(443
			,3
			,'department-store'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'food-drink')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(444
			,3
			,'food-drink'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'bookshop')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(445
			,3
			,'bookshop'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'pharmacy')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(446
			,3
			,'pharmacy'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'electronics-shop')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(447
			,3
			,'electronics-shop'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'hardware-house-garden-shop')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(448
			,3
			,'hardware-house-garden-shop'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'clothing-accessories-shop')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(449
			,3
			,'clothing-accessories-shop'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'sport-outdoor-shop')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(450
			,3
			,'sport-outdoor-shop'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'shop')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(451
			,3
			,'shop'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'business-services')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(452
			,3
			,'business-services'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'atm-bank-exchange')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(453
			,3
			,'atm-bank-exchange'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'police-emergency')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(454
			,3
			,'police-emergency'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'ambulance-services')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(455
			,3
			,'ambulance-services'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'fire-department')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(456
			,3
			,'fire-department'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'police-station')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(457
			,3
			,'police-station'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'post-office')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(458
			,3
			,'post-office'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'tourist-information')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(459
			,3
			,'tourist-information'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'petrol-station')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(460
			,3
			,'petrol-station'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'ev-charging-station')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(461
			,3
			,'ev-charging-station'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'car-rental')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(462
			,3
			,'car-rental'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'car-dealer-repair')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(463
			,3
			,'car-dealer-repair'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'travel-agency')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(464
			,3
			,'travel-agency'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'communication-media')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(465
			,3
			,'communication-media'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'business-industry')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(466
			,3
			,'business-industry'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'service')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(467
			,3
			,'service'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'facilities')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(468
			,3
			,'facilities'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'hospital-health-care-facility')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(469
			,3
			,'hospital-health-care-facility'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'hospital')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(470
			,3
			,'hospital'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'government-community-facility')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(471
			,3
			,'government-community-facility'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'education-facility')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(472
			,3
			,'education-facility'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'library')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(473
			,3
			,'library'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'fair-convention-facility')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(474
			,3
			,'fair-convention-facility'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'parking-facility')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(475
			,3
			,'parking-facility'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'toilet-rest-area')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(476
			,3
			,'toilet-rest-area'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'sports-facility-venue')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(477
			,3
			,'sports-facility-venue'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'facility')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(478
			,3
			,'facility'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'religious-place')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(479
			,3
			,'religious-place'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'leisure-outdoor')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(480
			,3
			,'leisure-outdoor'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'recreation')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(481
			,3
			,'recreation'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'amusement-holiday-park')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(482
			,3
			,'amusement-holiday-park'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'zoo')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(483
			,3
			,'zoo'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'administrative-areas-buildings')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(484
			,3
			,'administrative-areas-buildings'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'administrative-region')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(485
			,3
			,'administrative-region'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'city-town-village')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(486
			,3
			,'city-town-village'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'outdoor-area-complex')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(487
			,3
			,'outdoor-area-complex'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'building')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(488
			,3
			,'building'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'street-square')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(489
			,3
			,'street-square'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'intersection')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(490
			,3
			,'intersection'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'postal-area')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(491
			,3
			,'postal-area'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'natural-geographical')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(492
			,3
			,'natural-geographical'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'body-of-water')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(493
			,3
			,'body-of-water'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'mountain-hill')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(494
			,3
			,'mountain-hill'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'undersea-feature')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(495
			,3
			,'undersea-feature'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'forest-heath-vegetation')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(496
			,3
			,'forest-heath-vegetation'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(497
			,3
			,'cuisines'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.african')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(498
			,3
			,'cuisines.african'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.american')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(499
			,3
			,'cuisines.american'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.californian')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(500
			,3
			,'cuisines.californian'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.american-southwestern')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(501
			,3
			,'cuisines.american-southwestern'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.american-creole')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(502
			,3
			,'cuisines.american-creole'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.american-nativeamerican')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(503
			,3
			,'cuisines.american-nativeamerican'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.american-cajun')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(504
			,3
			,'cuisines.american-cajun'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.american-soulfood')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(505
			,3
			,'cuisines.american-soulfood'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.argentinean')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(506
			,3
			,'cuisines.argentinean'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.asian')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(507
			,3
			,'cuisines.asian'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.australian')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(508
			,3
			,'cuisines.australian'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.austrian')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(509
			,3
			,'cuisines.austrian'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.azerbaijani')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(510
			,3
			,'cuisines.azerbaijani'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.balkan')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(511
			,3
			,'cuisines.balkan'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.baltic')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(512
			,3
			,'cuisines.baltic'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.barbecue')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(513
			,3
			,'cuisines.barbecue'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.belgian')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(514
			,3
			,'cuisines.belgian'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.belorussian')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(515
			,3
			,'cuisines.belorussian'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.bohemian')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(516
			,3
			,'cuisines.bohemian'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.brazilian')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(517
			,3
			,'cuisines.brazilian'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.brazilian-baiana')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(518
			,3
			,'cuisines.brazilian-baiana'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.brazilian-capixaba')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(519
			,3
			,'cuisines.brazilian-capixaba'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.brazilian-mineira')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(520
			,3
			,'cuisines.brazilian-mineira'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.brazilian-bakery')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(521
			,3
			,'cuisines.brazilian-bakery'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.breakfast')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(522
			,3
			,'cuisines.breakfast'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.brewpub')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(523
			,3
			,'cuisines.brewpub'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.british')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(524
			,3
			,'cuisines.british'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.brunch')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(525
			,3
			,'cuisines.brunch'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.bruneian')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(526
			,3
			,'cuisines.bruneian'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.burger')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(527
			,3
			,'cuisines.burger'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.canadian')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(528
			,3
			,'cuisines.canadian'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.caribbean')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(529
			,3
			,'cuisines.caribbean'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.caucasian')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(530
			,3
			,'cuisines.caucasian'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.chicken')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(531
			,3
			,'cuisines.chicken'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.chilean')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(532
			,3
			,'cuisines.chilean'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.chinese')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(533
			,3
			,'cuisines.chinese'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.chinese-szechuan')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(534
			,3
			,'cuisines.chinese-szechuan'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.chinese-cantonese')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(535
			,3
			,'cuisines.chinese-cantonese'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.chinese-shanghai')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(536
			,3
			,'cuisines.chinese-shanghai'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.chinese-beijing')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(537
			,3
			,'cuisines.chinese-beijing'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.chinese-hunan-hubei')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(538
			,3
			,'cuisines.chinese-hunan-hubei'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.chinese-jiangsu-zhejiang')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(539
			,3
			,'cuisines.chinese-jiangsu-zhejiang'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.chinese-shandong')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(540
			,3
			,'cuisines.chinese-shandong'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.chinese-northeastern')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(541
			,3
			,'cuisines.chinese-northeastern'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.chinese-innermongolian')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(542
			,3
			,'cuisines.chinese-innermongolian'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.chinese-yunnan-guizhou')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(543
			,3
			,'cuisines.chinese-yunnan-guizhou'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.chinese-taiwanese')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(544
			,3
			,'cuisines.chinese-taiwanese'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.chinese-guangxi')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(545
			,3
			,'cuisines.chinese-guangxi'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.chinese-jiangxi')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(546
			,3
			,'cuisines.chinese-jiangxi'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.chinese-northwestern')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(547
			,3
			,'cuisines.chinese-northwestern'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.chinese-porridge')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(548
			,3
			,'cuisines.chinese-porridge'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.chinese-islamic')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(549
			,3
			,'cuisines.chinese-islamic'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.chinese-hotpot')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(550
			,3
			,'cuisines.chinese-hotpot'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.continental')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(551
			,3
			,'cuisines.continental'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.creperie')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(552
			,3
			,'cuisines.creperie'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.cuban')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(553
			,3
			,'cuisines.cuban'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.danish')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(554
			,3
			,'cuisines.danish'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.dinner')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(555
			,3
			,'cuisines.dinner'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.dutch')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(556
			,3
			,'cuisines.dutch'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.easteuropean')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(557
			,3
			,'cuisines.easteuropean'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.egyptian')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(558
			,3
			,'cuisines.egyptian'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.ethiopian')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(559
			,3
			,'cuisines.ethiopian'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.european')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(560
			,3
			,'cuisines.european'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.filipino')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(561
			,3
			,'cuisines.filipino'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.finnish')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(562
			,3
			,'cuisines.finnish'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.fondue')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(563
			,3
			,'cuisines.fondue'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.french')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(564
			,3
			,'cuisines.french'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.french-alsatian')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(565
			,3
			,'cuisines.french-alsatian'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.french-auvergnate')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(566
			,3
			,'cuisines.french-auvergnate'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.french-basque')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(567
			,3
			,'cuisines.french-basque'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.french-corse')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(568
			,3
			,'cuisines.french-corse'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.french-lyonnaise')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(569
			,3
			,'cuisines.french-lyonnaise'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.french-provencale')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(570
			,3
			,'cuisines.french-provencale'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.french-sud-ouest')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(571
			,3
			,'cuisines.french-sud-ouest'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.fusion')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(572
			,3
			,'cuisines.fusion'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.german')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(573
			,3
			,'cuisines.german'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.greek')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(574
			,3
			,'cuisines.greek'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.grill')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(575
			,3
			,'cuisines.grill'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.hawaiian-polynesian')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(576
			,3
			,'cuisines.hawaiian-polynesian'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.hotdogs')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(577
			,3
			,'cuisines.hotdogs'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.hungarian')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(578
			,3
			,'cuisines.hungarian'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.ice-cream')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(579
			,3
			,'cuisines.ice-cream'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.indian')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(580
			,3
			,'cuisines.indian'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.indian-tandoori')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(581
			,3
			,'cuisines.indian-tandoori'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.indian-punjabi')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(582
			,3
			,'cuisines.indian-punjabi'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.indian-rajasthani')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(583
			,3
			,'cuisines.indian-rajasthani'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.indian-bengali')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(584
			,3
			,'cuisines.indian-bengali'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.indian-goan')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(585
			,3
			,'cuisines.indian-goan'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.indian-jain')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(586
			,3
			,'cuisines.indian-jain'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.indian-konkani')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(587
			,3
			,'cuisines.indian-konkani'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.indian-gujarati')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(588
			,3
			,'cuisines.indian-gujarati'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.indian-parsi')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(589
			,3
			,'cuisines.indian-parsi'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.indian-southindian')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(590
			,3
			,'cuisines.indian-southindian'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.indian-maharashtrian')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(591
			,3
			,'cuisines.indian-maharashtrian'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.indian-northindian')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(592
			,3
			,'cuisines.indian-northindian'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.indian-malvani')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(593
			,3
			,'cuisines.indian-malvani'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.indian-hyderabadi')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(594
			,3
			,'cuisines.indian-hyderabadi'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.indonesian')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(595
			,3
			,'cuisines.indonesian'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.international')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(596
			,3
			,'cuisines.international'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.irish')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(597
			,3
			,'cuisines.irish'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.italian')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(598
			,3
			,'cuisines.italian'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.japanese')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(599
			,3
			,'cuisines.japanese'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.sushi')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(600
			,3
			,'cuisines.sushi'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.jewish-kosher')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(601
			,3
			,'cuisines.jewish-kosher'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.korean')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(602
			,3
			,'cuisines.korean'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.latinamerican')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(603
			,3
			,'cuisines.latinamerican'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.lebanese')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(604
			,3
			,'cuisines.lebanese'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.lunch')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(605
			,3
			,'cuisines.lunch'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.malaysian')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(606
			,3
			,'cuisines.malaysian'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.maltese')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(607
			,3
			,'cuisines.maltese'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.mediterranean')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(608
			,3
			,'cuisines.mediterranean'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.mexican')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(609
			,3
			,'cuisines.mexican'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.mexican-yucateca')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(610
			,3
			,'cuisines.mexican-yucateca'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.mexican-oaxaquena')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(611
			,3
			,'cuisines.mexican-oaxaquena'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.mexican-veracruzana')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(612
			,3
			,'cuisines.mexican-veracruzana'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.mexican-poblana')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(613
			,3
			,'cuisines.mexican-poblana'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.middle-eastern')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(614
			,3
			,'cuisines.middle-eastern'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.moroccan')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(615
			,3
			,'cuisines.moroccan'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.natural-healthy')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(616
			,3
			,'cuisines.natural-healthy'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.northamerican')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(617
			,3
			,'cuisines.northamerican'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.norwegian')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(618
			,3
			,'cuisines.norwegian'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.organic')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(619
			,3
			,'cuisines.organic'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.pakistani')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(620
			,3
			,'cuisines.pakistani'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.pastries')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(621
			,3
			,'cuisines.pastries'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.peruvian')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(622
			,3
			,'cuisines.peruvian'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.pizza')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(623
			,3
			,'cuisines.pizza'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.polish')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(624
			,3
			,'cuisines.polish'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.portuguese')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(625
			,3
			,'cuisines.portuguese'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.romanian')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(626
			,3
			,'cuisines.romanian'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.russian')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(627
			,3
			,'cuisines.russian'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.sandwich')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(628
			,3
			,'cuisines.sandwich'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.scandinavian')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(629
			,3
			,'cuisines.scandinavian'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.sea-food')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(630
			,3
			,'cuisines.sea-food'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.sicilian')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(631
			,3
			,'cuisines.sicilian'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.snacks-beverages')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(632
			,3
			,'cuisines.snacks-beverages'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.soup')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(633
			,3
			,'cuisines.soup'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.southamerican')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(634
			,3
			,'cuisines.southamerican'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.southeastasian')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(635
			,3
			,'cuisines.southeastasian'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.spanish')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(636
			,3
			,'cuisines.spanish'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.steak')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(637
			,3
			,'cuisines.steak'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.surinamese')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(638
			,3
			,'cuisines.surinamese'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.swedish')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(639
			,3
			,'cuisines.swedish'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.swiss')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(640
			,3
			,'cuisines.swiss'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.tapas')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(641
			,3
			,'cuisines.tapas'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.thai')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(642
			,3
			,'cuisines.thai'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.turkish')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(643
			,3
			,'cuisines.turkish'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.ukrainian')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(644
			,3
			,'cuisines.ukrainian'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.vegan')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(645
			,3
			,'cuisines.vegan'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.vegetarian')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(646
			,3
			,'cuisines.vegetarian'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.venezuelan')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(647
			,3
			,'cuisines.venezuelan'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.vietnamese')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(648
			,3
			,'cuisines.vietnamese'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 3 AND TypeName = 'cuisines.yemeni')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(649
			,3
			,'cuisines.yemeni'
			,1
			,1)
	END

---------------------------------------------

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Agricultural Products')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(111
			,4
			,'13901'
			,'Agricultural Products'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Farms')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(112
			,4
			,'19101'
			,'Farms'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Veterinarians Dvm Vmd Public Health')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(113
			,4
			,'74220'
			,'Veterinarians Dvm Vmd Public Health'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Animal Shelters')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(114
			,4
			,'75203'
			,'Animal Shelters'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Pet Services')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(115
			,4
			,'75210'
			,'Pet Services'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Hunting & Fishing Preserves')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(116
			,4
			,'97101'
			,'Hunting & Fishing Preserves'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Wildlife Conservation')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(117
			,4
			,'97106'
			,'Wildlife Conservation'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Mining Companies')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(118
			,4
			,'149901'
			,'Mining Companies'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Construction Building Contractors')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(119
			,4
			,'152130'
			,'Construction Building Contractors'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Buildings Factory')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(120
			,4
			,'154235'
			,'Buildings Factory'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Flooring')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(121
			,4
			,'175203'
			,'Flooring'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Preserves (Manufacturers)')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(122
			,4
			,'203301'
			,'Preserves (Manufacturers)'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Wineries')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(123
			,4
			,'208401'
			,'Wineries'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Publishers')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(124
			,4
			,'274105'
			,'Publishers'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Automobile Manufacturers')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(125
			,4
			,'371102'
			,'Automobile Manufacturers'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Manufacturers')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(126
			,4
			,'399903'
			,'Manufacturers'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Train Stations')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(127
			,4
			,'401190'
			,'Train Stations'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Airport Transportation Service')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(128
			,4
			,'411101'
			,'Airport Transportation Service'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Ambulance Service')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(129
			,4
			,'411902'
			,'Ambulance Service'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Car Service')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(130
			,4
			,'411904'
			,'Car Service'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Rescue Squads')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(131
			,4
			,'411906'
			,'Rescue Squads'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Transportation Services')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(132
			,4
			,'411914'
			,'Transportation Services'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Taxis')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(133
			,4
			,'412101'
			,'Taxis'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Bus Lines')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(134
			,4
			,'413101'
			,'Bus Lines'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Buses Charter & Rental')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(135
			,4
			,'414201'
			,'Buses Charter & Rental'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Delivery Service')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(136
			,4
			,'421205'
			,'Delivery Service'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Moving Services')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(137
			,4
			,'421401'
			,'Moving Services'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Post Offices')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(138
			,4
			,'431101'
			,'Post Offices'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Ferry Terminals')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(139
			,4
			,'448290'
			,'Ferry Terminals'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Marinas')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(140
			,4
			,'449306'
			,'Marinas'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Boat Launching')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(141
			,4
			,'449903'
			,'Boat Launching'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Airline Companies')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(142
			,4
			,'451201'
			,'Airline Companies'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Airports')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(143
			,4
			,'458106'
			,'Airports'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Tourist Information')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(144
			,4
			,'472401'
			,'Tourist Information'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Travel Agents')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(145
			,4
			,'472402'
			,'Travel Agents'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Scales Public')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(146
			,4
			,'478502'
			,'Scales Public'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Telecommunications Services')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(147
			,4
			,'481302'
			,'Telecommunications Services'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Telephone Companies')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(148
			,4
			,'481304'
			,'Telephone Companies'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Electric Companies')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(149
			,4
			,'491101'
			,'Electric Companies'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Buses-New & Used (Wholesale)')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(150
			,4
			,'501209'
			,'Buses-New & Used (Wholesale)'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Recreational Vehicles Wholesale')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(151
			,4
			,'501210'
			,'Recreational Vehicles Wholesale'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Snowmobiles Wholesale & Distributors')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(152
			,4
			,'501227'
			,'Snowmobiles Wholesale & Distributors'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Curtains Shower & Bath Wholesale')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(153
			,4
			,'502332'
			,'Curtains Shower & Bath Wholesale'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Construction Materials NEC (Wholesale)')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(154
			,4
			,'503999'
			,'Construction Materials NEC (Wholesale)'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Copiers')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(155
			,4
			,'504403'
			,'Copiers'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Office Equipment (Wholesale)')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(156
			,4
			,'504498'
			,'Office Equipment (Wholesale)'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Medical Supplies')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(157
			,4
			,'504704'
			,'Medical Supplies'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Security Control Equipment & Systems-Wholesale')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(158
			,4
			,'506304'
			,'Security Control Equipment & Systems-Wholesale'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Beauty Salons-Equipment & Supplies (Wholesale)')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(159
			,4
			,'508702'
			,'Beauty Salons-Equipment & Supplies (Wholesale)'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Recycling Centers (Wholesale)')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(160
			,4
			,'509312'
			,'Recycling Centers (Wholesale)'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Pharmaceutical Products Wholesale')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(161
			,4
			,'512203'
			,'Pharmaceutical Products Wholesale'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Butchering (Wholesale)')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(162
			,4
			,'514701'
			,'Butchering (Wholesale)'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Chemicals (Wholesale)')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(163
			,4
			,'516916'
			,'Chemicals (Wholesale)'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Cigar Cigarette & Tobacco Dealers-Wholesale')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(164
			,4
			,'519402'
			,'Cigar Cigarette & Tobacco Dealers-Wholesale'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Windows')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(165
			,4
			,'521107'
			,'Windows'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Electric Equipment & Supplies Retail')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(166
			,4
			,'521135'
			,'Electric Equipment & Supplies Retail'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Home Centers')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(167
			,4
			,'521138'
			,'Home Centers'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Paint Stores')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(168
			,4
			,'523107'
			,'Paint Stores'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Hardware Stores')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(169
			,4
			,'525104'
			,'Hardware Stores'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Garden Centers')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(170
			,4
			,'526104'
			,'Garden Centers'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Department Stores')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(171
			,4
			,'531102'
			,'Department Stores'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Retail Shops')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(172
			,4
			,'531104'
			,'Retail Shops'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Wholesale Clubs')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(173
			,4
			,'531110'
			,'Wholesale Clubs'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Variety Stores')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(174
			,4
			,'533101'
			,'Variety Stores'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Food Markets')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(175
			,4
			,'541101'
			,'Food Markets'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Convenience Stores')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(176
			,4
			,'541103'
			,'Convenience Stores'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Grocery Stores')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(177
			,4
			,'541105'
			,'Grocery Stores'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Grocers Health Foods')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(178
			,4
			,'541108'
			,'Grocers Health Foods'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Seafood Markets')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(179
			,4
			,'542101'
			,'Seafood Markets'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Farm Markets')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(180
			,4
			,'543102'
			,'Farm Markets'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Bakers Cake & Pie')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(181
			,4
			,'546103'
			,'Bakers Cake & Pie'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Doughnuts')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(182
			,4
			,'546105'
			,'Doughnuts'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Food Specialties Retail')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(183
			,4
			,'549910'
			,'Food Specialties Retail'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Miscellaneous Food Stores')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(184
			,4
			,'549999'
			,'Miscellaneous Food Stores'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = '(All) Auto Dealers')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(185
			,4
			,'551102'
			,'(All) Auto Dealers'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Truck Dealers-New')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(186
			,4
			,'551105'
			,'Truck Dealers-New'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Vans Dealers')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(187
			,4
			,'551108'
			,'Vans Dealers'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Automobile Accessories')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(188
			,4
			,'553129'
			,'Automobile Accessories'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Gas Stations')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(189
			,4
			,'554101'
			,'Gas Stations'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Truck Stops & Plazas')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(190
			,4
			,'554103'
			,'Truck Stops & Plazas'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Electric Charging Station')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(191
			,4
			,'554112'
			,'Electric Charging Station'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Boat Equipment & Supplies')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(192
			,4
			,'555103'
			,'Boat Equipment & Supplies'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Boat Dealers')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(193
			,4
			,'555104'
			,'Boat Dealers'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Yachts')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(194
			,4
			,'555107'
			,'Yachts'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'All Terrain Vehicles')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(195
			,4
			,'557101'
			,'All Terrain Vehicles'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Motorcycle Dealers')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(196
			,4
			,'557106'
			,'Motorcycle Dealers'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Children''s Clothing')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(197
			,4
			,'564103'
			,'Children''s Clothing'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Clothing Retail')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(198
			,4
			,'565101'
			,'Clothing Retail'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Rubber & Plastic Footwear Retail')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(199
			,4
			,'566112'
			,'Rubber & Plastic Footwear Retail'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Sportswear')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(200
			,4
			,'569913'
			,'Sportswear'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Tailors')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(201
			,4
			,'569919'
			,'Tailors'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Furniture Stores')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(202
			,4
			,'571216'
			,'Furniture Stores'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Chinaware & Glassware Retail')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(203
			,4
			,'571921'
			,'Chinaware & Glassware Retail'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Lighting Stores')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(204
			,4
			,'571926'
			,'Lighting Stores'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Kitchen Accessories')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(205
			,4
			,'571928'
			,'Kitchen Accessories'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Grills Barbecue')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(206
			,4
			,'572233'
			,'Grills Barbecue'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Electronic Equipment & Supplies Retail')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(207
			,4
			,'573117'
			,'Electronic Equipment & Supplies Retail'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Marine Electronic Equipment & Supplies Retail')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(208
			,4
			,'573122'
			,'Marine Electronic Equipment & Supplies Retail'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Dvd Sales & Service')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(209
			,4
			,'573132'
			,'Dvd Sales & Service'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Computer Software')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(210
			,4
			,'573401'
			,'Computer Software'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Computer Parts & Supplies')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(211
			,4
			,'573402'
			,'Computer Parts & Supplies'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Musical Instruments')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(212
			,4
			,'573608'
			,'Musical Instruments'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Ice Cream Parlors')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(213
			,4
			,'581203'
			,'Ice Cream Parlors'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Foods Carry Out')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(214
			,4
			,'581206'
			,'Foods Carry Out'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = '(All) Restaurants')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(215
			,4
			,'581208'
			,'(All) Restaurants'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Delicatessens')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(216
			,4
			,'581209'
			,'Delicatessens'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Caterers')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(217
			,4
			,'581212'
			,'Caterers'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Cafeterias')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(218
			,4
			,'581213'
			,'Cafeterias'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Cafes')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(219
			,4
			,'581214'
			,'Cafes'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Appetizers & Snacks Etc')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(220
			,4
			,'581217'
			,'Appetizers & Snacks Etc'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Subs & Sandwiches')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(221
			,4
			,'581219'
			,'Subs & Sandwiches'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Banquet Rooms')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(222
			,4
			,'581223'
			,'Banquet Rooms'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Theatres Dinner')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(223
			,4
			,'581226'
			,'Theatres Dinner'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Coffee Shops')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(224
			,4
			,'581228'
			,'Coffee Shops'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Tea Rooms')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(225
			,4
			,'581236'
			,'Tea Rooms'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Juice Bars')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(226
			,4
			,'581248'
			,'Juice Bars'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Restaurants Cyber Cafes')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(227
			,4
			,'581254'
			,'Restaurants Cyber Cafes'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Bars')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(228
			,4
			,'581301'
			,'Bars'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Discotheques')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(229
			,4
			,'581302'
			,'Discotheques'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Cocktail Lounges')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(230
			,4
			,'581303'
			,'Cocktail Lounges'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Pubs')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(231
			,4
			,'581305'
			,'Pubs'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Comedy Clubs')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(232
			,4
			,'581307'
			,'Comedy Clubs'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Karaoke Clubs')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(233
			,4
			,'581309'
			,'Karaoke Clubs'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Pharmacies')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(234
			,4
			,'591205'
			,'Pharmacies'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Wines Retail')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(235
			,4
			,'592103'
			,'Wines Retail'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Flea Markets')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(236
			,4
			,'593218'
			,'Flea Markets'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Pawn Shops')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(237
			,4
			,'593229'
			,'Pawn Shops'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Bicycle Racks & Security Systems')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(238
			,4
			,'594142'
			,'Bicycle Racks & Security Systems'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Book Stores')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(239
			,4
			,'594201'
			,'Book Stores'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Jewelers')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(240
			,4
			,'594409'
			,'Jewelers'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Hobby & Model Shops')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(241
			,4
			,'594508'
			,'Hobby & Model Shops'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Toy Stores')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(242
			,4
			,'594517'
			,'Toy Stores'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Gift Shops')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(243
			,4
			,'594712'
			,'Gift Shops'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Florists')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(244
			,4
			,'599201'
			,'Florists'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Opticians')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(245
			,4
			,'599504'
			,'Opticians'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Cell Phones')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(246
			,4
			,'599902'
			,'Cell Phones'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Pet Supplies')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(247
			,4
			,'599929'
			,'Pet Supplies'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Factory Outlets')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(248
			,4
			,'599931'
			,'Factory Outlets'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Wedding Supplies & Services')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(249
			,4
			,'599940'
			,'Wedding Supplies & Services'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Art Galleries & Dealers')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(250
			,4
			,'599969'
			,'Art Galleries & Dealers'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Monuments')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(251
			,4
			,'599972'
			,'Monuments'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Banks')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(252
			,4
			,'602101'
			,'Banks'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Currency Exchanges')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(253
			,4
			,'609901'
			,'Currency Exchanges'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Investments')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(254
			,4
			,'621111'
			,'Investments'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Stock Exchanges')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(255
			,4
			,'623102'
			,'Stock Exchanges'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Financial Planners')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(256
			,4
			,'628205'
			,'Financial Planners'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Government Pension Health/Welfare Funds')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(257
			,4
			,'637104'
			,'Government Pension Health/Welfare Funds'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = '(All) Insurance')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(258
			,4
			,'641112'
			,'(All) Insurance'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Shopping Centers & Malls')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(259
			,4
			,'651201'
			,'Shopping Centers & Malls'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Condominiums')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(260
			,4
			,'651301'
			,'Condominiums'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Apartments')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(261
			,4
			,'651303'
			,'Apartments'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Townhouses')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(262
			,4
			,'651401'
			,'Townhouses'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Real Estate Agents')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(263
			,4
			,'653118'
			,'Real Estate Agents'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Housing Rental')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(264
			,4
			,'653123'
			,'Housing Rental'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Real Estate Developers')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(265
			,4
			,'655202'
			,'Real Estate Developers'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Hotels & Motels')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(266
			,4
			,'701101'
			,'Hotels & Motels'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Cottages & Cabins')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(267
			,4
			,'701106'
			,'Cottages & Cabins'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Bed & Breakfasts')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(268
			,4
			,'701107'
			,'Bed & Breakfasts'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Chalet & Cabin Rentals')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(269
			,4
			,'701108'
			,'Chalet & Cabin Rentals'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Skiing Centers & Resorts')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(270
			,4
			,'701110'
			,'Skiing Centers & Resorts'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Resorts')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(271
			,4
			,'701111'
			,'Resorts'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Villas')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(272
			,4
			,'701116'
			,'Villas'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Hostels')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(273
			,4
			,'702103'
			,'Hostels'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Adventure Games & Activities')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(274
			,4
			,'703208'
			,'Adventure Games & Activities'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Campgrounds')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(275
			,4
			,'703301'
			,'Campgrounds'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Dry Cleaners')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(276
			,4
			,'721201'
			,'Dry Cleaners'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Laundry & Garment Services NEC')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(277
			,4
			,'721999'
			,'Laundry & Garment Services NEC'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Photography')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(278
			,4
			,'722121'
			,'Photography'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Manicurists')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(279
			,4
			,'723102'
			,'Manicurists'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Barbers')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(280
			,4
			,'724101'
			,'Barbers'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Funeral Homes')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(281
			,4
			,'726103'
			,'Funeral Homes'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Tax Return Preparation & Filing')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(282
			,4
			,'729101'
			,'Tax Return Preparation & Filing'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Advertising Marketing')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(283
			,4
			,'731115'
			,'Advertising Marketing'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Distribution Services')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(284
			,4
			,'731908'
			,'Distribution Services'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'House Cleaning')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(285
			,4
			,'734922'
			,'House Cleaning'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Toilets Portable')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(286
			,4
			,'735922'
			,'Toilets Portable'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Misc Equipment Rental & Leasing')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(287
			,4
			,'735999'
			,'Misc Equipment Rental & Leasing'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Computer Services')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(288
			,4
			,'737101'
			,'Computer Services'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Traffic Control Services')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(289
			,4
			,'738114'
			,'Traffic Control Services'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'News Service')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(290
			,4
			,'738301'
			,'News Service'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Photo Laboratories Commercial')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(291
			,4
			,'738409'
			,'Photo Laboratories Commercial'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Convention & Meeting Facilities & Service')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(292
			,4
			,'738931'
			,'Convention & Meeting Facilities & Service'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Business Services NEC')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(293
			,4
			,'738999'
			,'Business Services NEC'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Auto Rental')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(294
			,4
			,'751401'
			,'Auto Rental'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Parking Garages')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(295
			,4
			,'752102'
			,'Parking Garages'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Auto Body Shops')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(296
			,4
			,'753201'
			,'Auto Body Shops'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Tire Service')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(297
			,4
			,'753402'
			,'Tire Service'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Glass Replacement Shops')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(298
			,4
			,'753698'
			,'Glass Replacement Shops'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Truck Repair & Service')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(299
			,4
			,'753812'
			,'Truck Repair & Service'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Car Washes')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(300
			,4
			,'754201'
			,'Car Washes'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Appliances Household Major Repairing')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(301
			,4
			,'762902'
			,'Appliances Household Major Repairing'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Motorcycle Repair & Service')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(302
			,4
			,'769967'
			,'Motorcycle Repair & Service'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Repair Shops & Related Services NEC')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(303
			,4
			,'769999'
			,'Repair Shops & Related Services NEC'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Movie Theatres')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(304
			,4
			,'783201'
			,'Movie Theatres'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Movie Theatres (drive-Ins)')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(305
			,4
			,'783301'
			,'Movie Theatres (drive-Ins)'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Video & DVD Rental')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(306
			,4
			,'784102'
			,'Video & DVD Rental'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Theatres Live')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(307
			,4
			,'792207'
			,'Theatres Live'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Concert Venues')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(308
			,4
			,'792213'
			,'Concert Venues'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Entertainment Bureaus')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(309
			,4
			,'792905'
			,'Entertainment Bureaus'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Bowling Centers')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(310
			,4
			,'793301'
			,'Bowling Centers'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Stadiums Arenas & Athletic Fields')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(311
			,4
			,'794104'
			,'Stadiums Arenas & Athletic Fields'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Race Tracks')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(312
			,4
			,'794801'
			,'Race Tracks'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Horse Racing')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(313
			,4
			,'794803'
			,'Horse Racing'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Health Clubs & Gyms')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(314
			,4
			,'799101'
			,'Health Clubs & Gyms'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Golf Courses-Public Or Private')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(315
			,4
			,'799290'
			,'Golf Courses-Public Or Private'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Casinos')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(316
			,4
			,'799302'
			,'Casinos'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Arcades')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(317
			,4
			,'799303'
			,'Arcades'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Amusement Places')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(318
			,4
			,'799601'
			,'Amusement Places'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Water Parks')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(319
			,4
			,'799602'
			,'Water Parks'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Amusement Parks')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(320
			,4
			,'799604'
			,'Amusement Parks'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Recreation Centers')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(321
			,4
			,'799701'
			,'Recreation Centers'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Hockey Clubs')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(322
			,4
			,'799705'
			,'Hockey Clubs'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Flying Clubs')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(323
			,4
			,'799712'
			,'Flying Clubs'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Beach & Cabana Clubs')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(324
			,4
			,'799714'
			,'Beach & Cabana Clubs'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Sports Recreational')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(325
			,4
			,'799729'
			,'Sports Recreational'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Skating Rinks')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(326
			,4
			,'799901'
			,'Skating Rinks'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Bicycles Renting')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(327
			,4
			,'799909'
			,'Bicycles Renting'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Baths Bath Houses Spas & Saunas')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(328
			,4
			,'799910'
			,'Baths Bath Houses Spas & Saunas'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Billiard Parlors')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(329
			,4
			,'799912'
			,'Billiard Parlors'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Fairgrounds')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(330
			,4
			,'799923'
			,'Fairgrounds'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Historical Places')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(331
			,4
			,'799940'
			,'Historical Places'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Parks')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(332
			,4
			,'799951'
			,'Parks'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Picnic Grounds')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(333
			,4
			,'799954'
			,'Picnic Grounds'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Horseback Riding')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(334
			,4
			,'799968'
			,'Horseback Riding'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Swimming Pools Public')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(335
			,4
			,'799969'
			,'Swimming Pools Public'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Tennis Courts Public')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(336
			,4
			,'799971'
			,'Tennis Courts Public'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Squash Courts Public')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(337
			,4
			,'799984'
			,'Squash Courts Public'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = '(All) Doctors')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(338
			,4
			,'801101'
			,'(All) Doctors'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = '(All) Dentists')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(339
			,4
			,'802101'
			,'(All) Dentists'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Retirement Communities & Homes')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(340
			,4
			,'805904'
			,'Retirement Communities & Homes'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Homes Personal Care Facility')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(341
			,4
			,'805911'
			,'Homes Personal Care Facility'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Nursing & Personal Care NEC')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(342
			,4
			,'805999'
			,'Nursing & Personal Care NEC'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Hospitals')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(343
			,4
			,'806202'
			,'Hospitals'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Emergency Medical & Surgical Service')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(344
			,4
			,'806203'
			,'Emergency Medical & Surgical Service'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Specialty Hospitals Except Psychiatric')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(345
			,4
			,'806998'
			,'Specialty Hospitals Except Psychiatric'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Blood Banks & Centers')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(346
			,4
			,'809916'
			,'Blood Banks & Centers'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Legal Services')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(347
			,4
			,'811198'
			,'Legal Services'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Schools (K-12)')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(348
			,4
			,'821103'
			,'Schools (K-12)'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Schools With Special Academic Education')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(349
			,4
			,'821107'
			,'Schools With Special Academic Education'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Technical Schools')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(350
			,4
			,'821115'
			,'Technical Schools'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Colleges & Universities')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(351
			,4
			,'822101'
			,'Colleges & Universities'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Junior Colleges & Technical Institutes')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(352
			,4
			,'822298'
			,'Junior Colleges & Technical Institutes'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Libraries')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(353
			,4
			,'823106'
			,'Libraries'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Vocational Schools NEC')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(354
			,4
			,'824999'
			,'Vocational Schools NEC'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Driving Instruction')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(355
			,4
			,'829902'
			,'Driving Instruction'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Language Schools')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(356
			,4
			,'829912'
			,'Language Schools'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Art Schools')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(357
			,4
			,'829919'
			,'Art Schools'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Culinary Schools')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(358
			,4
			,'829924'
			,'Culinary Schools'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Hiking Backpacking & Mountaineering Service')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(359
			,4
			,'829950'
			,'Hiking Backpacking & Mountaineering Service'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Sports Tutoring')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(360
			,4
			,'829975'
			,'Sports Tutoring'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Soup Kitchens')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(361
			,4
			,'832268'
			,'Soup Kitchens'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Day Care')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(362
			,4
			,'835101'
			,'Day Care'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Preschools')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(363
			,4
			,'835102'
			,'Preschools'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Residential Care Homes')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(364
			,4
			,'836105'
			,'Residential Care Homes'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Museums')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(365
			,4
			,'841201'
			,'Museums'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Planetariums')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(366
			,4
			,'841204'
			,'Planetariums'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Cultural Centres')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(367
			,4
			,'841206'
			,'Cultural Centres'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'National Monuments')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(368
			,4
			,'841211'
			,'National Monuments'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Zoos')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(369
			,4
			,'842201'
			,'Zoos'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Arboretums')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(370
			,4
			,'842203'
			,'Arboretums'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Aquariums Public')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(371
			,4
			,'842205'
			,'Aquariums Public'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Motoring Organisations')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(372
			,4
			,'861112'
			,'Motoring Organisations'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Clubs')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(373
			,4
			,'864108'
			,'Clubs'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Community Organizations')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(374
			,4
			,'864110'
			,'Community Organizations'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Church Organizations')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(375
			,4
			,'866104'
			,'Church Organizations'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = '(All) Places Of Worship')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(376
			,4
			,'866107'
			,'(All) Places Of Worship'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Synagogues')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(377
			,4
			,'866112'
			,'Synagogues'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Mosques')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(378
			,4
			,'866114'
			,'Mosques'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Ashrams')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(379
			,4
			,'866116'
			,'Ashrams'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Dance Clubs')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(380
			,4
			,'869921'
			,'Dance Clubs'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Engineering')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(381
			,4
			,'871147'
			,'Engineering'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Research Labs')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(382
			,4
			,'873101'
			,'Research Labs'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Laboratories Agricultural')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(383
			,4
			,'873122'
			,'Laboratories Agricultural'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Observatories')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(384
			,4
			,'873306'
			,'Observatories'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Industrial Developments')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(385
			,4
			,'874838'
			,'Industrial Developments'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Beach')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(386
			,4
			,'901006'
			,'Beach'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Cave')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(387
			,4
			,'901010'
			,'Cave'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Forest')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(388
			,4
			,'901014'
			,'Forest'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Ridge')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(389
			,4
			,'901023'
			,'Ridge'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Valley')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(390
			,4
			,'901027'
			,'Valley'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Bay')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(391
			,4
			,'902101'
			,'Bay'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Rapids')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(392
			,4
			,'902208'
			,'Rapids'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Reservoir')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(393
			,4
			,'902209'
			,'Reservoir'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Swamp')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(394
			,4
			,'902212'
			,'Swamp'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Bridge')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(395
			,4
			,'903001'
			,'Bridge'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Building')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(396
			,4
			,'903002'
			,'Building'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Dam')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(397
			,4
			,'903005'
			,'Dam'
			,1
			,1)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Tower')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(398
			,4
			,'903010'
			,'Tower'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Federal Government Executive Offices')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(399
			,4
			,'911101'
			,'Federal Government Executive Offices'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'State Government Executive Offices')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(400
			,4
			,'911102'
			,'State Government Executive Offices'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'City Government Executive Offices')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(401
			,4
			,'911104'
			,'City Government Executive Offices'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Federal Government General Offices')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(402
			,4
			,'919901'
			,'Federal Government General Offices'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'State Government General Offices')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(403
			,4
			,'919902'
			,'State Government General Offices'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Government Offices Native American')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(404
			,4
			,'919906'
			,'Government Offices Native American'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Federal Government Correctional Institutions')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(405
			,4
			,'922301'
			,'Federal Government Correctional Institutions'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Fire & Rescue')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(406
			,4
			,'922404'
			,'Fire & Rescue'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Port Services')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(407
			,4
			,'962105'
			,'Port Services'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Transportation Authorities')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(408
			,4
			,'962107'
			,'Transportation Authorities'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'City Government Regulation/Adm Comms/Utilities')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(409
			,4
			,'963104'
			,'City Government Regulation/Adm Comms/Utilities'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Military Bases')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(410
			,4
			,'971109'
			,'Military Bases'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Federal Government International Affairs')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(411
			,4
			,'972101'
			,'Federal Government International Affairs'
			,0
			,0)
	END

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 4 AND TypeName = 'Tourist Attractions')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,Sic
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(412
			,4
			,'999333'
			,'Tourist Attractions'
			,1
			,1)
	END

--------------------------------
IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 2 AND TypeName = 'airport')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]			
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(650
			,2			
			,'airport'
			,1
			,1)
	END
IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 2 AND TypeName = 'restaurant')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]			
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(651
			,2			
			,'restaurant'
			,1
			,1)
	END
IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 2 AND TypeName = 'bank')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]			
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(652
			,2			
			,'bank'
			,0
			,0)
	END
IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 2 AND TypeName = 'atm')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]			
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(653
			,2			
			,'atm'
			,0
			,0)
	END
IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 2 AND TypeName = 'hotel')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]			
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(654
			,2			
			,'hotel'
			,1
			,1)
	END
IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 2 AND TypeName = 'pub')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]			
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(655
			,2			
			,'pub'
			,1
			,1)
	END
IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 2 AND TypeName = 'bus_station')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]			
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(656
			,2			
			,'bus_station'
			,1
			,1)
	END
IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 2 AND TypeName = 'railway_station')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]			
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(657
			,2
			,'railway_station'
			,1
			,1)
	END
IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 2 AND TypeName = 'cinema')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(658
			,2
			,'cinema'
			,1
			,1)
	END
IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 2 AND TypeName = 'hospital')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(659
			,2
			,'hospital'
			,0
			,0)
	END
IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 2 AND TypeName = 'college')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(660
			,2
			,'college'
			,0
			,0)
	END
IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 2 AND TypeName = 'school')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(661
			,2
			,'school'
			,0
			,0)
	END
IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 2 AND TypeName = 'pharmacy')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(662
			,2
			,'pharmacy'
			,0
			,0)
	END
IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 2 AND TypeName = 'supermarket')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(663
			,2
			,'supermarket'
			,0
			,0)
	END
IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 2 AND TypeName = 'fuel')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(664
			,2
			,'fuel'
			,0
			,0)
	END
IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 2 AND TypeName = 'gym')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(665
			,2
			,'gym'
			,0
			,0)
	END
IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 2 AND TypeName = 'place_of_worship')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(666
			,2
			,'place_of_worship'
			,1
			,1)
	END
IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 2 AND TypeName = 'toilet')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(667
			,2
			,'toilet'
			,0
			,0)
	END
IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 2 AND TypeName = 'park')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(668
			,2
			,'park'
			,1
			,1)
	END
IF NOT EXISTS (SELECT 1 FROM dbo.MapsXCategory WITH(NOLOCK) WHERE MapsId = 2 AND TypeName = 'stadium')
	BEGIN
		INSERT INTO [dbo].[MapsXCategory]
			(MapsXCategoryId
			,[MapsId]
			,[TypeName]
			,[IsNeeded]
			,[ExtraSearch])
		VALUES
			(669
			,2
			,'stadium'
			,1
			,1)
	END
