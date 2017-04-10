CREATE PROCEDURE [dbo].[User_InsertingUserInfo] 
(
    @UserId INT
	,@UserName Varchar(250)
    ,@Email Varchar(250)
    ,@Password Varchar(250)
    ,@GooglePlusId Varchar(250) = NULL
    ,@FaceBookId INT = NULL
    ,@MasterCountryId INT = NULL
    ,@MasterStateId INT = NULL
    ,@MasterCityId INT = NULL
    ,@AddressOne Varchar(250) = NULL
    ,@AddressTwo Varchar(250) = NULL
    ,@ZipCode Varchar(50) = NULL
    ,@PhoneNumber Varchar(50)   = NULL      
    ,@ModifiedBy Varchar(250)
)              
AS
BEGIN
                
IF(@UserId =0) 
BEGIN
                INSERT INTO [dbo].[User]
                                                   ([UserName]
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
                                                   )
                                VALUES
                                                   (@UserName
                                                   ,@Email
                                                   ,@Password
                                                   ,@GooglePlusId
                                                   ,@FaceBookId
                                                   ,@MasterCountryId
                                                   ,@MasterStateId
                                                   ,@MasterCityId
                                                   ,@AddressOne
                                                   ,@AddressTwo
                                                   ,@ZipCode
                                                   ,@PhoneNumber
                                                   ,GETUTCDATE()
                                                   )
END
ELSE
BEGIN
                UPDATE [dbo].[User]
                   SET [UserName] = @UserName
                                  ,[Email] = @Email
                                  ,[Password] = @Password
                                  ,[GooglePlusId] = @GooglePlusId
                                  ,[FaceBookId] = @FaceBookId
                                  ,[MasterCountryId] = @MasterCountryId
                                  ,[MasterStateId] = @MasterStateId
                                  ,[MasterCityId] = @MasterCityId
                                  ,[AddressOne] = @AddressOne
                                  ,[AddressTwo] = @AddressTwo
                                  ,[ZipCode] = @ZipCode
                                  ,[PhoneNumber] = @PhoneNumber                      
                                  ,[ModifiedUTCDate] = GETUTCDATE()
                                  ,[ModifiedBy] = @ModifiedBy
                WHERE UserId = @UserId
END




END