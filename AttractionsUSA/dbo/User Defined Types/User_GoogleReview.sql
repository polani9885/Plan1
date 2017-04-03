CREATE TYPE User_GoogleReview AS TABLE 
(
	Rating INT
	,Author_name Varchar(250)
	,Author_url Varchar(250)
	,[Language] Varchar(50)
	,Profile_photo_url Varchar(500)
	,[Text] Varchar(Max)
	,CreatedDate Datetime
)