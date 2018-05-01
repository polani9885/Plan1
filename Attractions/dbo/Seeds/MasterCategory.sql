USE [Attractions]
GO
IF(SELECT Count(1) FROM MasterCategory WHERE CategoryName = 'Entertainment' AND CategoryId = 1) < 1
BEGIN
	INSERT INTO [dbo].[MasterCategory]
           ([CategoryId]
           ,[CategoryName]
		   ,[ViewTime])
     VALUES
           (1
           ,'Entertainment'
		   ,'04:00:00')
END
IF(SELECT Count(1) FROM MasterCategory WHERE CategoryName = 'Nigh Life' AND CategoryId = 2) < 1
BEGIN
	INSERT INTO [dbo].[MasterCategory]
           ([CategoryId]
           ,[CategoryName]
		   ,[ViewTime])
     VALUES
           (2
           ,'Nigh Life'
		   ,'03:00:00')
END
IF(SELECT Count(1) FROM MasterCategory WHERE CategoryName = 'Food & Drink & Stay' AND CategoryId = 3) < 1
BEGIN
	INSERT INTO [dbo].[MasterCategory]
           ([CategoryId]
           ,[CategoryName]
		   ,[ViewTime])
     VALUES
           (3
           ,'Food & Drink & Stay'
		   ,'01:00:00')
END
IF(SELECT Count(1) FROM MasterCategory WHERE CategoryName = 'Transportation' AND CategoryId = 4) < 1
BEGIN
	INSERT INTO [dbo].[MasterCategory]
           ([CategoryId]
           ,[CategoryName]
		   ,[ViewTime])
     VALUES
           (4
           ,'Transportation'
		   ,'00:30:00')
END
IF(SELECT Count(1) FROM MasterCategory WHERE CategoryName = 'Holly Place' AND CategoryId = 5) < 1
BEGIN
	INSERT INTO [dbo].[MasterCategory]
           ([CategoryId]
           ,[CategoryName]
		   ,[ViewTime])
     VALUES
           (5
           ,'Holly Place'
		   ,'02:00:00')
END
IF(SELECT Count(1) FROM MasterCategory WHERE CategoryName = 'Others' AND CategoryId = 6) < 1
BEGIN
	INSERT INTO [dbo].[MasterCategory]
           ([CategoryId]
           ,[CategoryName]
		   ,[ViewTime])
     VALUES
           (6
           ,'Others'
		   ,'00:30:00')
END
