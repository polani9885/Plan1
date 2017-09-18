USE [Attractions]
GO
IF(SELECT Count(1) FROM MasterCategory WHERE CategoryName = 'Entertainment' AND CategoryId = 1) < 1
BEGIN
	INSERT INTO [dbo].[MasterCategory]
           ([CategoryId]
           ,[CategoryName])
     VALUES
           (1
           ,'Entertainment')
END
IF(SELECT Count(1) FROM MasterCategory WHERE CategoryName = 'Nigh Life' AND CategoryId = 2) < 1
BEGIN
	INSERT INTO [dbo].[MasterCategory]
           ([CategoryId]
           ,[CategoryName])
     VALUES
           (2
           ,'Nigh Life')
END
IF(SELECT Count(1) FROM MasterCategory WHERE CategoryName = 'Food & Drink & Stay' AND CategoryId = 3) < 1
BEGIN
	INSERT INTO [dbo].[MasterCategory]
           ([CategoryId]
           ,[CategoryName])
     VALUES
           (3
           ,'Food & Drink & Stay')
END
IF(SELECT Count(1) FROM MasterCategory WHERE CategoryName = 'Transportation' AND CategoryId = 4) < 1
BEGIN
	INSERT INTO [dbo].[MasterCategory]
           ([CategoryId]
           ,[CategoryName])
     VALUES
           (4
           ,'Transportation')
END
IF(SELECT Count(1) FROM MasterCategory WHERE CategoryName = 'Holly Place' AND CategoryId = 5) < 1
BEGIN
	INSERT INTO [dbo].[MasterCategory]
           ([CategoryId]
           ,[CategoryName])
     VALUES
           (5
           ,'Holly Place')
END
IF(SELECT Count(1) FROM MasterCategory WHERE CategoryName = 'Others' AND CategoryId = 6) < 1
BEGIN
	INSERT INTO [dbo].[MasterCategory]
           ([CategoryId]
           ,[CategoryName])
     VALUES
           (6
           ,'Others')
END
