﻿-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE Public_GetCategory
	
AS
BEGIN
	



SELECT [GoogleTypeID]
      ,[TypeName]
      ,[IsNeeded]
	  ,MasterCategoryId
  FROM [dbo].[MasterGoogleType]
  WHERE IsNeeded = 1





END
