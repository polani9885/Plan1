CREATE PROCEDURE InsertExceptionInformation 
(
	@MethodName [varchar](250),
	@Parameters [varchar](max),
	@ExceptionMessage [varchar](max) ,
	@ExceptionStackTrace [varchar](max) ,	
	@CreatedBy [varchar](250) 
)	
AS
BEGIN


	INSERT INTO [dbo].[LoggInfo]
           ([MethodName]
           ,[Parameters]
           ,[ExceptionMessage]
           ,[ExceptionStackTrace]
           ,[CreatedDate]
           ,[CreatedBy]
           )
     VALUES
           (@MethodName
           ,@Parameters
           ,@ExceptionMessage
           ,@ExceptionStackTrace
           ,getdate()
           ,@CreatedBy
           )

END