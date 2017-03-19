-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE GetAttractionOpenTime
	@AttractionsId INT
AS
BEGIN
	SELECT 
	AA.AttractionsId
	,MW.WeekName
	,CAST(AA.OpenTime AS Varchar(50)) AS OpenTime 
	,CAST(AA.CloseTime AS Varchar(50)) AS CloseTime
	,AA.AttractionsActiveStatusId 
	,MW.MasterWeekId
	FROM AttractionsActiveStatus AA
	JOIN MasterWeek MW ON MW.MasterWeekId = AA.MasterWeekId
	WHERE AA.AttractionsId = @AttractionsId
END
