CREATE PROCEDURE [dbo].[User_GetUserInformation] 
(
                @UserName Varchar(250),
                @Password Varchar(250)
)              
AS
BEGIN

                SELECT [UserId]
                                  ,[UserName]
                                  ,[Email]
                                  ,[Password]
                                  ,[GooglePlusId]
                                  ,[FaceBookId]
                                  ,[MasterCountryId]
                                  ,[MasterStateId]
                                  ,[MasterCityId]
                                  ,[AddressOne]
                                  ,[AddressTwo]
                                  ,[ZipCode]
                                  ,[PhoneNumber]
                                  ,[CreatedUTCDate]
                                  ,[ModifiedUTCDate]
                                  ,[ModifiedBy]
                  FROM [dbo].[User]
                  WHERE UserName = @UserName
                  AND [Password]  = @Password

END