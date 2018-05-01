IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'accounting') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(1,'accounting',0,0,'00:00:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'airport') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(2,'airport',1,4,'01:00:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'amusement_park') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(3,'amusement_park',1,1,'03:00:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'aquarium') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(4,'aquarium',1,1,'03:00:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'art_gallery') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(5,'art_gallery',1,1,'02:00:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'atm') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(6,'atm',0,6,'00:10:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'bakery') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(7,'bakery',1,3,'01:00:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'bank') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(8,'bank',0,0,'00:30:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'bar') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(9,'bar',1,3,'01:00:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'beauty_salon') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(10,'beauty_salon',0,6,'00:00:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'bicycle_store') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(11,'bicycle_store',0,0,'00:30:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'book_store') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(12,'book_store',0,0,'00:00:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'bowling_alley') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(13,'bowling_alley',1,1,'03:00:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'bus_station') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(14,'bus_station',1,4,'00:30:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'cafe') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(15,'cafe',1,3,'01:00:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'campground') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(16,'campground',1,1,'03:00:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'car_dealer') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(17,'car_dealer',0,4,'00:30:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'car_rental') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(18,'car_rental',1,4,'00:30:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'car_repair') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(19,'car_repair',0,4,'02:00:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'car_wash') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(20,'car_wash',0,4,'00:30:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'casino') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(21,'casino',1,1,'03:00:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'cemetery') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(22,'cemetery',1,5,'02:00:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'church') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(23,'church',1,5,'02:00:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'city_hall') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(24,'city_hall',1,6,'01:00:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'clothing_store') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(25,'clothing_store',0,6,'02:00:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'convenience_store') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(26,'convenience_store',0,0,'00:30:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'courthouse') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(27,'courthouse',0,0,'01:00:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'dentist') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(28,'dentist',0,0,'01:00:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'department_store') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(29,'department_store',0,0,'00:30:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'doctor') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(30,'doctor',0,0,'01:00:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'electrician') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(31,'electrician',0,0,'00:30:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'electronics_store') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(32,'electronics_store',0,0,'00:00:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'embassy') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(33,'embassy',1,6,'00:01:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'establishment') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(34,'establishment',0,0,'00:00:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'finance') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(35,'finance',0,0,'00:00:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'fire_station') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(36,'fire_station',0,0,'00:00:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'florist') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(37,'florist',0,0,'00:30:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'food') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(38,'food',1,0,'01:00:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'funeral_home') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(39,'funeral_home',1,0,'01:00:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'furniture_store') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(40,'furniture_store',0,0,'01:00:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'gas_station') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(41,'gas_station',1,0,'00:15:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'general_contractor') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(42,'general_contractor',0,0,'00:00:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'grocery_or_supermarket') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(43,'grocery_or_supermarket',0,0,'00:30:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'gym') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(44,'gym',0,0,'01:30:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'hair_care') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(45,'hair_care',0,6,'00:30:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'hardware_store') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(46,'hardware_store',0,0,'00:00:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'health') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(47,'health',0,0,'01:00:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'hindu_temple') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(48,'hindu_temple',1,0,'02:00:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'home_goods_store') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(49,'home_goods_store',0,0,'00:00:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'hospital') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(50,'hospital',0,0,'01:00:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'insurance_agency') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(51,'insurance_agency',0,0,'00:00:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'jewelry_store') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(52,'jewelry_store',0,0,'00:00:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'laundry') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(53,'laundry',0,0,'00:30:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'lawyer') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(54,'lawyer',0,0,'00:00:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'library') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(55,'library',0,0,'00:00:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'liquor_store') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(56,'liquor_store',0,3,'00:00:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'local_government_office') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(57,'local_government_office',0,0,'00:00:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'locksmith') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(58,'locksmith',0,0,'00:00:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'lodging') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(59,'lodging',1,3,'10:00:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'meal_delivery') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(60,'meal_delivery',1,3,'00:30:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'meal_takeaway') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(61,'meal_takeaway',1,3,'00:30:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'mosque') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(62,'mosque',1,5,'01:00:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'movie_rental') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(63,'movie_rental',0,0,'00:00:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'movie_theater') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(64,'movie_theater',0,0,'03:00:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'moving_company') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(65,'moving_company',0,0,'00:00:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'museum') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(66,'museum',1,1,'02:00:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'night_club') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(67,'night_club',1,2,'03:00:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'painter') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(68,'painter',0,0,'00:00:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'park') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(69,'park',1,6,'02:00:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'parking') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(70,'parking',1,6,'00:30:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'pet_store') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(71,'pet_store',0,0,'00:00:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'pharmacy') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(72,'pharmacy',0,0,'00:00:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'physiotherapist') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(73,'physiotherapist',0,0,'00:00:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'place_of_worship') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(74,'place_of_worship',1,5,'02:00:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'plumber') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(75,'plumber',0,0,'00:00:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'police') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(76,'police',0,0,'00:00:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'post_office') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(77,'post_office',0,0,'00:00:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'real_estate_agency') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(78,'real_estate_agency',0,0,'00:00:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'restaurant') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(79,'restaurant',1,3,'01:00:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'roofing_contractor') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(80,'roofing_contractor',0,0,'00:00:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'rv_park') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(81,'rv_park',1,6,'00:15:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'school') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(82,'school',0,0,'00:00:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'shoe_store') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(83,'shoe_store',0,0,'00:00:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'shopping_mall') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(84,'shopping_mall',1,6,'02:00:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'spa') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(85,'spa',1,1,'02:00:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'stadium') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(86,'stadium',1,1,'03:00:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'storage') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(87,'storage',0,0,'00:00:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'store') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(88,'store',0,0,'01:00:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'subway_station') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(89,'subway_station',1,4,'00:30:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'synagogue') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(90,'synagogue',1,5,'02:00:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'taxi_stand') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(91,'taxi_stand',1,4,'00:30:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'train_station') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(92,'train_station',1,4,'00:30:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'transit_station') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(93,'transit_station',1,4,'00:30:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'travel_agency') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(94,'travel_agency',1,4,'00:30:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'veterinary_care') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(95,'veterinary_care',0,0,'00:00:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'zoo') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(96,'zoo',1,3,'02:00:00')
END
GO
IF(SELECT Count(1) FROM MasterGoogleType WHERE TypeName = 'room') < 1
BEGIN
	INSERT INTO MasterGoogleType(GoogleTypeID,TypeName,IsNeeded,MasterCategoryId,ViewTime) VALUES(97,'room',1,3,'10:00:00')
END
