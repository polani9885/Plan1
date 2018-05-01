USE [Attractions]
GO
SET IDENTITY_INSERT [dbo].[MasterCategoryXMasterGoogleType] ON 

GO
IF(SELECT Count(1) FROM MasterCategoryXMasterGoogleType WHERE MasterCategoryId = 1 AND MasterGoogleTypeId = 4) < 1
BEGIN
	INSERT [dbo].[MasterCategoryXMasterGoogleType] ([MasterCategoryXMasterGoogleTypeId], [MasterCategoryId], [MasterGoogleTypeId]) VALUES (1, 1, 4)
END
GO
IF(SELECT Count(1) FROM MasterCategoryXMasterGoogleType WHERE MasterCategoryId = 1 AND MasterGoogleTypeId = 5) < 1
BEGIN
	INSERT [dbo].[MasterCategoryXMasterGoogleType] ([MasterCategoryXMasterGoogleTypeId], [MasterCategoryId], [MasterGoogleTypeId]) VALUES (2, 1, 5)
END
GO
IF(SELECT Count(1) FROM MasterCategoryXMasterGoogleType WHERE MasterCategoryId = 1 AND MasterGoogleTypeId = 13) < 1
BEGIN
	INSERT [dbo].[MasterCategoryXMasterGoogleType] ([MasterCategoryXMasterGoogleTypeId], [MasterCategoryId], [MasterGoogleTypeId]) VALUES (3, 1, 13)
END
GO
IF(SELECT Count(1) FROM MasterCategoryXMasterGoogleType WHERE MasterCategoryId = 1 AND MasterGoogleTypeId = 16) < 1
BEGIN
	INSERT [dbo].[MasterCategoryXMasterGoogleType] ([MasterCategoryXMasterGoogleTypeId], [MasterCategoryId], [MasterGoogleTypeId]) VALUES (4, 1, 16)
END
GO
IF(SELECT Count(1) FROM MasterCategoryXMasterGoogleType WHERE MasterCategoryId = 1 AND MasterGoogleTypeId = 21) < 1
BEGIN
	INSERT [dbo].[MasterCategoryXMasterGoogleType] ([MasterCategoryXMasterGoogleTypeId], [MasterCategoryId], [MasterGoogleTypeId]) VALUES (5, 1, 21)
END
GO
IF(SELECT Count(1) FROM MasterCategoryXMasterGoogleType WHERE MasterCategoryId = 1 AND MasterGoogleTypeId = 24) < 1
BEGIN
	INSERT [dbo].[MasterCategoryXMasterGoogleType] ([MasterCategoryXMasterGoogleTypeId], [MasterCategoryId], [MasterGoogleTypeId]) VALUES (6, 1, 24)
END
GO
IF(SELECT Count(1) FROM MasterCategoryXMasterGoogleType WHERE MasterCategoryId = 1 AND MasterGoogleTypeId = 66) < 1
BEGIN
	INSERT [dbo].[MasterCategoryXMasterGoogleType] ([MasterCategoryXMasterGoogleTypeId], [MasterCategoryId], [MasterGoogleTypeId]) VALUES (7, 1, 66)
END
GO
IF(SELECT Count(1) FROM MasterCategoryXMasterGoogleType WHERE MasterCategoryId = 1 AND MasterGoogleTypeId = 84) < 1
BEGIN
	INSERT [dbo].[MasterCategoryXMasterGoogleType] ([MasterCategoryXMasterGoogleTypeId], [MasterCategoryId], [MasterGoogleTypeId]) VALUES (8, 1, 84)
END
GO
IF(SELECT Count(1) FROM MasterCategoryXMasterGoogleType WHERE MasterCategoryId = 1 AND MasterGoogleTypeId = 85) < 1
BEGIN
	INSERT [dbo].[MasterCategoryXMasterGoogleType] ([MasterCategoryXMasterGoogleTypeId], [MasterCategoryId], [MasterGoogleTypeId]) VALUES (9, 1, 85)
END
GO
IF(SELECT Count(1) FROM MasterCategoryXMasterGoogleType WHERE MasterCategoryId = 1 AND MasterGoogleTypeId = 86) < 1
BEGIN
	INSERT [dbo].[MasterCategoryXMasterGoogleType] ([MasterCategoryXMasterGoogleTypeId], [MasterCategoryId], [MasterGoogleTypeId]) VALUES (10, 1, 86)
END
GO
IF(SELECT Count(1) FROM MasterCategoryXMasterGoogleType WHERE MasterCategoryId = 1 AND MasterGoogleTypeId = 96) < 1
BEGIN
	INSERT [dbo].[MasterCategoryXMasterGoogleType] ([MasterCategoryXMasterGoogleTypeId], [MasterCategoryId], [MasterGoogleTypeId]) VALUES (11, 1, 96)
END
GO
IF(SELECT Count(1) FROM MasterCategoryXMasterGoogleType WHERE MasterCategoryId = 2 AND MasterGoogleTypeId = 67) < 1
BEGIN
	INSERT [dbo].[MasterCategoryXMasterGoogleType] ([MasterCategoryXMasterGoogleTypeId], [MasterCategoryId], [MasterGoogleTypeId]) VALUES (12, 2, 67)
END
GO
IF(SELECT Count(1) FROM MasterCategoryXMasterGoogleType WHERE MasterCategoryId = 3 AND MasterGoogleTypeId = 7) < 1
BEGIN
	INSERT [dbo].[MasterCategoryXMasterGoogleType] ([MasterCategoryXMasterGoogleTypeId], [MasterCategoryId], [MasterGoogleTypeId]) VALUES (13, 3, 7)
END
GO
IF(SELECT Count(1) FROM MasterCategoryXMasterGoogleType WHERE MasterCategoryId = 3 AND MasterGoogleTypeId = 8) < 1
BEGIN
	INSERT [dbo].[MasterCategoryXMasterGoogleType] ([MasterCategoryXMasterGoogleTypeId], [MasterCategoryId], [MasterGoogleTypeId]) VALUES (14, 3, 8)
END
GO
IF(SELECT Count(1) FROM MasterCategoryXMasterGoogleType WHERE MasterCategoryId = 3 AND MasterGoogleTypeId = 15) < 1
BEGIN
	INSERT [dbo].[MasterCategoryXMasterGoogleType] ([MasterCategoryXMasterGoogleTypeId], [MasterCategoryId], [MasterGoogleTypeId]) VALUES (15, 3, 15)
END
GO
IF(SELECT Count(1) FROM MasterCategoryXMasterGoogleType WHERE MasterCategoryId = 3 AND MasterGoogleTypeId = 38) < 1
BEGIN
	INSERT [dbo].[MasterCategoryXMasterGoogleType] ([MasterCategoryXMasterGoogleTypeId], [MasterCategoryId], [MasterGoogleTypeId]) VALUES (16, 3, 38)
END
GO
IF(SELECT Count(1) FROM MasterCategoryXMasterGoogleType WHERE MasterCategoryId = 3 AND MasterGoogleTypeId = 59) < 1
BEGIN
	INSERT [dbo].[MasterCategoryXMasterGoogleType] ([MasterCategoryXMasterGoogleTypeId], [MasterCategoryId], [MasterGoogleTypeId]) VALUES (17, 3, 59)
END
GO
IF(SELECT Count(1) FROM MasterCategoryXMasterGoogleType WHERE MasterCategoryId = 3 AND MasterGoogleTypeId = 60) < 1
BEGIN
	INSERT [dbo].[MasterCategoryXMasterGoogleType] ([MasterCategoryXMasterGoogleTypeId], [MasterCategoryId], [MasterGoogleTypeId]) VALUES (18, 3, 60)
END
GO
IF(SELECT Count(1) FROM MasterCategoryXMasterGoogleType WHERE MasterCategoryId = 3 AND MasterGoogleTypeId = 61) < 1
BEGIN
	INSERT [dbo].[MasterCategoryXMasterGoogleType] ([MasterCategoryXMasterGoogleTypeId], [MasterCategoryId], [MasterGoogleTypeId]) VALUES (19, 3, 61)
END
GO
IF(SELECT Count(1) FROM MasterCategoryXMasterGoogleType WHERE MasterCategoryId = 3 AND MasterGoogleTypeId = 79) < 1
BEGIN
	INSERT [dbo].[MasterCategoryXMasterGoogleType] ([MasterCategoryXMasterGoogleTypeId], [MasterCategoryId], [MasterGoogleTypeId]) VALUES (20, 3, 79)
END
GO
IF(SELECT Count(1) FROM MasterCategoryXMasterGoogleType WHERE MasterCategoryId = 3 AND MasterGoogleTypeId = 97) < 1
BEGIN
	INSERT [dbo].[MasterCategoryXMasterGoogleType] ([MasterCategoryXMasterGoogleTypeId], [MasterCategoryId], [MasterGoogleTypeId]) VALUES (21, 3, 97)
END
GO
IF(SELECT Count(1) FROM MasterCategoryXMasterGoogleType WHERE MasterCategoryId = 4 AND MasterGoogleTypeId = 18) < 1
BEGIN
	INSERT [dbo].[MasterCategoryXMasterGoogleType] ([MasterCategoryXMasterGoogleTypeId], [MasterCategoryId], [MasterGoogleTypeId]) VALUES (22, 4, 18)
END
GO
IF(SELECT Count(1) FROM MasterCategoryXMasterGoogleType WHERE MasterCategoryId = 4 AND MasterGoogleTypeId = 2) < 1
BEGIN
	INSERT [dbo].[MasterCategoryXMasterGoogleType] ([MasterCategoryXMasterGoogleTypeId], [MasterCategoryId], [MasterGoogleTypeId]) VALUES (23, 4, 2)
END
GO
IF(SELECT Count(1) FROM MasterCategoryXMasterGoogleType WHERE MasterCategoryId = 4 AND MasterGoogleTypeId = 81) < 1
BEGIN
	INSERT [dbo].[MasterCategoryXMasterGoogleType] ([MasterCategoryXMasterGoogleTypeId], [MasterCategoryId], [MasterGoogleTypeId]) VALUES (24, 4, 81)
END
GO
IF(SELECT Count(1) FROM MasterCategoryXMasterGoogleType WHERE MasterCategoryId = 4 AND MasterGoogleTypeId = 89) < 1
BEGIN
	INSERT [dbo].[MasterCategoryXMasterGoogleType] ([MasterCategoryXMasterGoogleTypeId], [MasterCategoryId], [MasterGoogleTypeId]) VALUES (25, 4, 89)
END
GO
IF(SELECT Count(1) FROM MasterCategoryXMasterGoogleType WHERE MasterCategoryId = 4 AND MasterGoogleTypeId = 90) < 1
BEGIN
	INSERT [dbo].[MasterCategoryXMasterGoogleType] ([MasterCategoryXMasterGoogleTypeId], [MasterCategoryId], [MasterGoogleTypeId]) VALUES (26, 4, 90)
END
GO
IF(SELECT Count(1) FROM MasterCategoryXMasterGoogleType WHERE MasterCategoryId = 4 AND MasterGoogleTypeId = 91) < 1
BEGIN
	INSERT [dbo].[MasterCategoryXMasterGoogleType] ([MasterCategoryXMasterGoogleTypeId], [MasterCategoryId], [MasterGoogleTypeId]) VALUES (27, 4, 91)
END
GO
IF(SELECT Count(1) FROM MasterCategoryXMasterGoogleType WHERE MasterCategoryId = 4 AND MasterGoogleTypeId = 92) < 1
BEGIN
	INSERT [dbo].[MasterCategoryXMasterGoogleType] ([MasterCategoryXMasterGoogleTypeId], [MasterCategoryId], [MasterGoogleTypeId]) VALUES (28, 4, 92)
END
GO
IF(SELECT Count(1) FROM MasterCategoryXMasterGoogleType WHERE MasterCategoryId = 4 AND MasterGoogleTypeId = 93) < 1
BEGIN
	INSERT [dbo].[MasterCategoryXMasterGoogleType] ([MasterCategoryXMasterGoogleTypeId], [MasterCategoryId], [MasterGoogleTypeId]) VALUES (29, 4, 93)
END
GO
IF(SELECT Count(1) FROM MasterCategoryXMasterGoogleType WHERE MasterCategoryId = 4 AND MasterGoogleTypeId = 94) < 1
BEGIN
	INSERT [dbo].[MasterCategoryXMasterGoogleType] ([MasterCategoryXMasterGoogleTypeId], [MasterCategoryId], [MasterGoogleTypeId]) VALUES (30, 4, 94)
END
GO
IF(SELECT Count(1) FROM MasterCategoryXMasterGoogleType WHERE MasterCategoryId = 5 AND MasterGoogleTypeId = 23) < 1
BEGIN
	INSERT [dbo].[MasterCategoryXMasterGoogleType] ([MasterCategoryXMasterGoogleTypeId], [MasterCategoryId], [MasterGoogleTypeId]) VALUES (31, 5, 23)
END
GO
IF(SELECT Count(1) FROM MasterCategoryXMasterGoogleType WHERE MasterCategoryId = 5 AND MasterGoogleTypeId = 48) < 1
BEGIN
	INSERT [dbo].[MasterCategoryXMasterGoogleType] ([MasterCategoryXMasterGoogleTypeId], [MasterCategoryId], [MasterGoogleTypeId]) VALUES (32, 5, 48)
END
GO
IF(SELECT Count(1) FROM MasterCategoryXMasterGoogleType WHERE MasterCategoryId = 5 AND MasterGoogleTypeId = 62) < 1
BEGIN
	INSERT [dbo].[MasterCategoryXMasterGoogleType] ([MasterCategoryXMasterGoogleTypeId], [MasterCategoryId], [MasterGoogleTypeId]) VALUES (33, 5, 62)
END
GO
IF(SELECT Count(1) FROM MasterCategoryXMasterGoogleType WHERE MasterCategoryId = 5 AND MasterGoogleTypeId = 74) < 1
BEGIN
	INSERT [dbo].[MasterCategoryXMasterGoogleType] ([MasterCategoryXMasterGoogleTypeId], [MasterCategoryId], [MasterGoogleTypeId]) VALUES (34, 5, 74)
END
GO
IF(SELECT Count(1) FROM MasterCategoryXMasterGoogleType WHERE MasterCategoryId = 6 AND MasterGoogleTypeId = 22) < 1
BEGIN
	INSERT [dbo].[MasterCategoryXMasterGoogleType] ([MasterCategoryXMasterGoogleTypeId], [MasterCategoryId], [MasterGoogleTypeId]) VALUES (35, 6, 22)
END
GO
IF(SELECT Count(1) FROM MasterCategoryXMasterGoogleType WHERE MasterCategoryId = 6 AND MasterGoogleTypeId = 23) < 1
BEGIN
	INSERT [dbo].[MasterCategoryXMasterGoogleType] ([MasterCategoryXMasterGoogleTypeId], [MasterCategoryId], [MasterGoogleTypeId]) VALUES (36, 6, 23)
END
GO
IF(SELECT Count(1) FROM MasterCategoryXMasterGoogleType WHERE MasterCategoryId = 6 AND MasterGoogleTypeId = 39) < 1
BEGIN
	INSERT [dbo].[MasterCategoryXMasterGoogleType] ([MasterCategoryXMasterGoogleTypeId], [MasterCategoryId], [MasterGoogleTypeId]) VALUES (37, 6, 39)
END
GO
IF(SELECT Count(1) FROM MasterCategoryXMasterGoogleType WHERE MasterCategoryId = 6 AND MasterGoogleTypeId = 50) < 1
BEGIN
	INSERT [dbo].[MasterCategoryXMasterGoogleType] ([MasterCategoryXMasterGoogleTypeId], [MasterCategoryId], [MasterGoogleTypeId]) VALUES (38, 6, 50)
END
GO
IF(SELECT Count(1) FROM MasterCategoryXMasterGoogleType WHERE MasterCategoryId = 7 AND MasterGoogleTypeId = 3) < 1
BEGIN
	INSERT [dbo].[MasterCategoryXMasterGoogleType] ([MasterCategoryXMasterGoogleTypeId], [MasterCategoryId], [MasterGoogleTypeId]) VALUES (39, 7, 3)
END
GO
IF(SELECT Count(1) FROM MasterCategoryXMasterGoogleType WHERE MasterCategoryId = 7 AND MasterGoogleTypeId = 69) < 1
BEGIN
	INSERT [dbo].[MasterCategoryXMasterGoogleType] ([MasterCategoryXMasterGoogleTypeId], [MasterCategoryId], [MasterGoogleTypeId]) VALUES (40, 7, 69)
END
GO
SET IDENTITY_INSERT [dbo].[MasterCategoryXMasterGoogleType] OFF
GO
