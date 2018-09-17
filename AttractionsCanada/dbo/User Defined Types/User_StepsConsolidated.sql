CREATE TYPE User_StepsConsolidated AS TABLE 
(
	distance_Value INT,
	duration_Value INT,
	end_location_lat Varchar(50),
	end_location_lng Varchar(50),
	start_location_lat Varchar(50),
	start_location_lng Varchar(50),
	travel_mode Varchar(50),
	OrderId INT
)