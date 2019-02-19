CREATE PROCEDURE Admin_GetMasterPriceInfo
AS
BEGIN
	SELECT [MasterPriceInfoId]
      ,[PriveLevel]
      ,[Food]
      ,[Stay]
  FROM [dbo].[MasterPriceInfo] WITH(NOLOCK)
END