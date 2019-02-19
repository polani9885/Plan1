//var userTripDataBasePrefix = "UserTrip_";
//var angularScope;
//var isAttractionCategoryDataDone = false;
//var isDestinationNearByDataDone = false;
//var isTravelBreakNearByDataDone = false;
//function CreatingUserTripDataBase(data) {
//    $.each(data,
//        function(key, value) {
//            var tripStartDate = new Date(value.StartDate);
            
//            if (new Date() > tripStartDate) {
//                DeleteDataBase(value.UserTripId);
//            } else {
//                CreateDataBase(value.UserTripId);
//            }
//        });
//}

//function DeleteDataBase(userTripId) {
//    new EntryPoint.Main().IndexDbMain.indexDeleteDatabase(userTripDataBasePrefix + userTripId);
//}

//function CreateDataBase(userTripId) {
//    var dbName = userTripDataBasePrefix + userTripId;
//    var db = new EntryPoint.Main().IndexDbMain.indexCreateDatabase(dbName);
//}

//function StoreAttractionCategoryData(userTripId,data) {
//    new EntryPoint.Main().IndexDbMain.indexStoreTableData(userTripDataBasePrefix + userTripId, new EntryPoint.Main().Constants.tblAttractionCategory, data);
//}

//function StoreDestinationNearByData(userTripId, data) {
//    new EntryPoint.Main().IndexDbMain.indexStoreTableData(userTripDataBasePrefix + userTripId, new EntryPoint.Main().Constants.tblDesinationNearyBy, data);
//}

//function OpenDataBase(userTripId, scope) {
//    angularScope = scope;
    
//    new EntryPoint.Main().IndexDbMain.indexConnectionOpen(userTripDataBasePrefix + userTripId, GettingData);
//}

//function GettingData() {
    
//    GetAttractionCategoryData();
//    GetDestinationNearByData();
//    GetTravelBreakNearByData();
//}

//function StoreTravelBreakNearByData(userTripId, data) {
//    new EntryPoint.Main().IndexDbMain.indexStoreTableData(userTripDataBasePrefix + userTripId, new EntryPoint.Main().Constants.tblTravelBreakNearBy, data);
//}

//function GetAttractionCategoryData() {
    
//    angularScope.AttractionXCategory = [];
//    new EntryPoint.Main().IndexDbMain.indexGetTableData(new EntryPoint.Main().Constants.tblAttractionCategory,
//        function (data) {
            
//            angularScope.AttractionXCategory.push(data);
//            isAttractionCategoryDataDone = true;
//        });
//}

//function GetDestinationNearByData() {
//    angularScope.GetAttractionsNextAttractions = [];
//    new EntryPoint.Main().IndexDbMain.indexGetTableData(new EntryPoint.Main().Constants.tblDesinationNearyBy,
//        function(data) {
            


//            var temp = [];
//            temp.attractionTravelStepsId = data.attractionTravelStepsId;
//            temp.data = jQuery.parseJSON(data.data);
//            angularScope.GetAttractionsNextAttractions.push(temp);

//            isDestinationNearByDataDone = true;
//        });
//}

//function GetTravelBreakNearByData() {
//    angularScope.AttractionTravelStepsNearAttractionInfo = [];
//    new EntryPoint.Main().IndexDbMain.indexGetTableData(new EntryPoint.Main().Constants.tblTravelBreakNearBy,
//        function(data) {


//            var temp = [];
//            temp.orderId = data.orderId;
//            temp.attractionTravelStepsId = data.attractionTravelStepsId;
//            temp.data = jQuery.parseJSON(data.data);
//            angularScope.AttractionTravelStepsNearAttractionInfo.push(temp);

//            isTravelBreakNearByDataDone = true;
//        });
//}

//var LoopCountercounter = 0;
//function IndexdbPreDataLoadIsDone() {

//    if ((isTravelBreakNearByDataDone &&
//        isDestinationNearByDataDone &&
//        isAttractionCategoryDataDone) ||
//        LoopCountercounter > 5) {
//        angularScope.LoadUserData();
//        clearInterval(loadIndexDb);
//    }
//    LoopCountercounter = LoopCountercounter + 1;
//}



