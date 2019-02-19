
//var tblDesinationNearyBy = "DesinationNearBy";
//var tblTravelBreakNearBy = "TravelBreakNearBy";
//var tblAttractionCategory = "AttractionCategory";

//var dbConnection;

//function IndexCreateDatabase(dbName) {
//    if (!('indexedDB' in window)) {
//        console.log('This browser doesn\'t support IndexedDB');
//        return;
//    }
    
//    var req = window.indexedDB.open(dbName);
//    req.onsuccess = function (event) {
        
//    }
//    req.onerror = function () {
        
//    }

//    req.onupgradeneeded = function (event) {
        
//        var db = event.target.result;

//        var tblName = tblDesinationNearyBy;
//        if (!db.objectStoreNames.contains(tblName)) {
//            db.createObjectStore(tblName, { autoIncrement: true });
//        }
//        tblName = tblTravelBreakNearBy;
//        if (!db.objectStoreNames.contains(tblName)) {
//            db.createObjectStore(tblName, { autoIncrement: true });
//        }
//        tblName = tblAttractionCategory;
//        if (!db.objectStoreNames.contains(tblName)) {
//            db.createObjectStore(tblName, { autoIncrement: true });
//        }



//    }

//    return req;
//}

//function IndexDeleteDatabase(dbName) {
//    var req = IndexCreateDatabase(dbName);
//    var existed = true;
//    req.onsuccess = function () {
//        req.result.close();
//        if (!existed)
//            indexedDB.deleteDatabase(dbName);
//    }
//    req.onupgradeneeded = function () {
//        existed = false;
//    }
//}



//function IndexGetTableData(tblName, callback) {

    
    
//    var objectStore = dbConnection.transaction(tblName, "readwrite").objectStore(tblName);

    
//    objectStore.getAll().onsuccess = function (event) {
        
//        callback(event.target.result);
//    };

//}

//function IndexStoreTableData(dbName, tblName, data) {

//    if (jQuery.type(dbConnection) === "undefined") {
//        IndexConnectionOpen(dbName);
//    }

//    var objectStore = dbConnection.transaction(tblName, "readwrite").objectStore(tblName);
//    objectStore.add(data);
//}

//function IndexConnectionOpen(dbName) {
//    var req = indexedDB.open(dbName);
//    req.onupgradeneeded = function(event) {
        
//    }
//    req.onsuccess = function (event) {
        
//        dbConnection = req.result;
//    }

//    req.onupgradeneeded = function (event) {

//        var db = event.target.result;

//        var tblName = tblDesinationNearyBy;
//        if (!db.objectStoreNames.contains(tblName)) {
//            db.createObjectStore(tblName, { autoIncrement: true });
//        }
//        tblName = tblTravelBreakNearBy;
//        if (!db.objectStoreNames.contains(tblName)) {
//            db.createObjectStore(tblName, { autoIncrement: true });
//        }
//        tblName = tblAttractionCategory;
//        if (!db.objectStoreNames.contains(tblName)) {
//            db.createObjectStore(tblName, { autoIncrement: true });
//        }



//    }
//}

//function IndexConnectionOpen(dbName, callback) {
    
//    var req = indexedDB.open(dbName);
//    req.onupgradeneeded = function (event) {

//    }
//    req.onsuccess = function (event) {
        
//        dbConnection = req.result;
//        callback();
//    }
//    req.onupgradeneeded = function (event) {

        
//        var db = event.target.result;

//        var tblName = tblDesinationNearyBy;
//        if (!db.objectStoreNames.contains(tblName)) {
//            db.createObjectStore(tblName, { autoIncrement: true });
//        }
//        tblName = tblTravelBreakNearBy;
//        if (!db.objectStoreNames.contains(tblName)) {
//            db.createObjectStore(tblName, { autoIncrement: true });
//        }
//        tblName = tblAttractionCategory;
//        if (!db.objectStoreNames.contains(tblName)) {
//            db.createObjectStore(tblName, { autoIncrement: true });
//        }

//        callback();

//    }
//}
