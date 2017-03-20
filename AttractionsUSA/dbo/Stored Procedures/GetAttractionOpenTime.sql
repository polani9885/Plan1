-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[GetAttractionOpenTime]
	@AttractionID INT
AS
BEGIN
	SELECT 
	AA.AttractionsId
	,MW.WeekName
	,AA.OpenTime
	,AA.CloseTime 
	FROM AttractionsActiveStatus AA
	JOIN MasterWeek MW ON MW.MasterWeekId = AA.MasterWeekId
	WHERE AA.AttractionsId = @AttractionID
END

