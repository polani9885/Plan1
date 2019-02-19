CREATE PROCEDURE [dbo].[Admin_MasterPriceInfoUpdate] 
(
	@MasterPriceInfoId INT
    ,@PriveLevel INT
    ,@Food DECIMAL(18,2)
    ,@Stay DECIMAL(18,2)

)	
AS
BEGIN
	IF((SELECT 1 FROM MasterPriceInfo WITH(NOLOCK) WHERE MasterPriceInfoId = @MasterPriceInfoId) = 1)
	BEGIN	

		UPDATE [dbo].MasterPriceInfo
		   SET PriveLevel = @PriveLevel
				,Food = @Food
				,Stay = @Stay				
		 WHERE MasterPriceInfoId = @MasterPriceInfoId

		 
	END
	ELSE
	BEGIN

		INSERT INTO [dbo].MasterPriceInfo
			   (MasterPriceInfoId
			   ,PriveLevel
			   ,Food
			   ,Stay			   
			   )
		 VALUES
			   ((SELECT ISNULL(MAX(MasterPriceInfoId),0) + 1 FROM MasterPriceInfo WITH(NOLOCK))
			   ,@PriveLevel
			   ,@Food
			   ,@Stay			   
			   )

	END

	

END