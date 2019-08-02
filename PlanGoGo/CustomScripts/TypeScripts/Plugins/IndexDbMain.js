"use strict";
exports.__esModule = true;
var Constants_1 = require("../Common/Constants");
var Error_1 = require("../Modules/Error");
var IndexDbMain = /** @class */ (function () {
    function IndexDbMain() {
        this.errorParameters = {};
    }
    IndexDbMain.prototype.indexCreateDatabase = function (dbName) {
        try {
            if (!('indexedDB' in window)) {
                console.log('This browser doesn\'t support IndexedDB');
                return;
            }
            var req = window.indexedDB.open(dbName);
            req.onsuccess = function (event) {
            };
            req.onerror = function () {
            };
            req.onupgradeneeded = function (event) {
                var db = event.target.result;
                var tblName = Constants_1.Constants.tblDesinationNearyBy;
                if (!db.objectStoreNames.contains(tblName)) {
                    db.createObjectStore(tblName, { autoIncrement: true });
                }
                tblName = Constants_1.Constants.tblTravelBreakNearBy;
                if (!db.objectStoreNames.contains(tblName)) {
                    db.createObjectStore(tblName, { autoIncrement: true });
                }
                tblName = Constants_1.Constants.tblAttractionCategory;
                if (!db.objectStoreNames.contains(tblName)) {
                    db.createObjectStore(tblName, { autoIncrement: true });
                }
            };
            return req;
        }
        catch (e) {
            this.errorParameters = {};
            this.errorParameters.dbName = dbName;
            Error_1.Error.prototype.logError("IndexDbMain", "indexCreateDatabase", this.errorParameters, e);
        }
    };
    IndexDbMain.prototype.indexDeleteDatabase = function (dbName) {
        try {
            var req_1 = IndexDbMain.prototype.indexCreateDatabase(dbName);
            var existed_1 = true;
            req_1.onsuccess = function () {
                req_1.result.close();
                if (!existed_1)
                    indexedDB.deleteDatabase(dbName);
            };
            req_1.onupgradeneeded = function () {
                existed_1 = false;
            };
        }
        catch (e) {
            this.errorParameters = {};
            this.errorParameters.dbName = dbName;
            Error_1.Error.prototype.logError("IndexDbMain", "indexDeleteDatabase", this.errorParameters, e);
        }
    };
    IndexDbMain.prototype.indexGetTableData = function (tblName, callback) {
        try {
            var objectStore = IndexDbMain.prototype.dbConnection.transaction(tblName, "readwrite");
            var tbl = void 0;
            tbl = objectStore.objectStore(tblName);
            var openCursor = tbl.openCursor();
            var cursor_1;
            openCursor.onsuccess = function (event) {
                cursor_1 = event.target.result;
                if (cursor_1) {
                    callback(cursor_1.value);
                    cursor_1["continue"]();
                }
            };
            openCursor.oncomplete = function (event) {
            };
            openCursor.onerror = function (event) {
            };
        }
        catch (e) {
            this.errorParameters = {};
            this.errorParameters.tblName = tblName;
            Error_1.Error.prototype.logError("IndexDbMain", "indexGetTableData", this.errorParameters, e);
        }
    };
    IndexDbMain.prototype.indexStoreTableData = function (dbName, tblName, data) {
        try {
            if (jQuery.type(IndexDbMain.prototype.dbConnection) === "undefined") {
                IndexDbMain.prototype.indexConnectionOpen(dbName, function () { });
            }
            var objectStore = IndexDbMain.prototype.dbConnection.transaction(tblName, "readwrite");
            var tbl = void 0;
            tbl = objectStore.objectStore(tblName);
            tbl.add(data);
        }
        catch (e) {
            this.errorParameters = {};
            this.errorParameters.tblName = tblName;
            this.errorParameters.data = JSON.stringify(data);
            Error_1.Error.prototype.logError("IndexDbMain", "indexStoreTableData", this.errorParameters, e);
        }
    };
    IndexDbMain.prototype.indexConnectionOpen = function (dbName, callback) {
        try {
            var req_2 = indexedDB.open(dbName);
            req_2.onupgradeneeded = function (event) {
            };
            req_2.onsuccess = function (event) {
                IndexDbMain.prototype.dbConnection = req_2.result;
                callback();
            };
            req_2.onupgradeneeded = function (event) {
                var db = event.target.result;
                var tblName = Constants_1.Constants.tblDesinationNearyBy;
                if (!db.objectStoreNames.contains(tblName)) {
                    db.createObjectStore(tblName, { autoIncrement: true });
                }
                tblName = Constants_1.Constants.tblTravelBreakNearBy;
                if (!db.objectStoreNames.contains(tblName)) {
                    db.createObjectStore(tblName, { autoIncrement: true });
                }
                tblName = Constants_1.Constants.tblAttractionCategory;
                if (!db.objectStoreNames.contains(tblName)) {
                    db.createObjectStore(tblName, { autoIncrement: true });
                }
                callback();
            };
            req_2.onerror = function (event) {
            };
        }
        catch (e) {
            this.errorParameters = {};
            this.errorParameters.dbName = dbName;
            Error_1.Error.prototype.logError("IndexDbMain", "indexConnectionOpen", this.errorParameters, e);
        }
    };
    return IndexDbMain;
}());
exports.IndexDbMain = IndexDbMain;
