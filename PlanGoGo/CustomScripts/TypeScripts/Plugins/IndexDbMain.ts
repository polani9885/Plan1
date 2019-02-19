import {Constants} from "../Common/Constants";
import {Error} from "../Modules/Error";

export class IndexDbMain {


    public dbConnection: IDBDatabase;
    public errorParameters: any = {};

    public indexCreateDatabase(dbName: string): any {
        try {
            if (!('indexedDB' in window)) {
                console.log('This browser doesn\'t support IndexedDB');
                return;
            }

            let req: IDBOpenDBRequest = window.indexedDB.open(dbName);
            req.onsuccess = function(event: any) {

            }
            req.onerror = function() {

            }

            req.onupgradeneeded = function(event: any) {

                let db: any = event.target.result;

                var tblName = Constants.tblDesinationNearyBy;
                if (!db.objectStoreNames.contains(tblName)) {
                    db.createObjectStore(tblName, { autoIncrement: true });
                }
                tblName = Constants.tblTravelBreakNearBy;
                if (!db.objectStoreNames.contains(tblName)) {
                    db.createObjectStore(tblName, { autoIncrement: true });
                }
                tblName = Constants.tblAttractionCategory;
                if (!db.objectStoreNames.contains(tblName)) {
                    db.createObjectStore(tblName, { autoIncrement: true });
                }


            }

            return req;
        } catch (e) {
            this.errorParameters = {};
            this.errorParameters.dbName = dbName;
            Error.prototype.logError("IndexDbMain", "indexCreateDatabase", this.errorParameters, e);
        }
    }


    public indexDeleteDatabase(dbName: string) {
        try {
            let req: IDBOpenDBRequest = IndexDbMain.prototype.indexCreateDatabase(dbName);
            let existed = true;
            req.onsuccess = function() {
                req.result.close();
                if (!existed)
                    indexedDB.deleteDatabase(dbName);
            }
            req.onupgradeneeded = function() {
                existed = false;
            }
        } catch (e) {
            this.errorParameters = {};
            this.errorParameters.dbName = dbName;
            Error.prototype.logError("IndexDbMain", "indexDeleteDatabase", this.errorParameters, e);
        }
    }

    public indexGetTableData(tblName: string, callback: any) {
        try {

            let objectStore: IDBTransaction = IndexDbMain.prototype.dbConnection.transaction(tblName, "readwrite");

            let tbl: IDBObjectStore;
            tbl = objectStore.objectStore(tblName);

            let openCursor: any = tbl.openCursor();
            let cursor: any;

            openCursor.onsuccess = function(event: any) {


                cursor = event.target.result;
                if (cursor) {
                    callback(cursor.value);
                    cursor.continue();
                }

            };
            openCursor.oncomplete = function(event: any) {


            }

            openCursor.onerror = function(event: any) {

            }

        } catch (e) {
            this.errorParameters = {};
            this.errorParameters.tblName = tblName;
            Error.prototype.logError("IndexDbMain", "indexGetTableData", this.errorParameters, e);
        }
    }

    public indexStoreTableData(dbName: any, tblName: string, data: any) {
        try {
            if (jQuery.type(IndexDbMain.prototype.dbConnection) === "undefined") {
                IndexDbMain.prototype.indexConnectionOpen(dbName, function() {});
            }

            let objectStore: IDBTransaction = IndexDbMain.prototype.dbConnection.transaction(tblName, "readwrite");

            let tbl: IDBObjectStore;
            tbl = objectStore.objectStore(tblName);
            tbl.add(data);
        } catch (e) {
            this.errorParameters = {};
            this.errorParameters.tblName = tblName;
            this.errorParameters.data = JSON.stringify(data);
            Error.prototype.logError("IndexDbMain", "indexStoreTableData", this.errorParameters, e);
        }
    }


    public indexConnectionOpen(dbName: string, callback: any) {
        try {
            let req: IDBOpenDBRequest = indexedDB.open(dbName);
            req.onupgradeneeded = function(event: any) {

            }
            req.onsuccess = function(event: any) {

                IndexDbMain.prototype.dbConnection = req.result;
                callback();
            }
            req.onupgradeneeded = function(event: any) {


                let db: any = event.target.result;

                var tblName = Constants.tblDesinationNearyBy;
                if (!db.objectStoreNames.contains(tblName)) {
                    db.createObjectStore(tblName, { autoIncrement: true });
                }
                tblName = Constants.tblTravelBreakNearBy;
                if (!db.objectStoreNames.contains(tblName)) {
                    db.createObjectStore(tblName, { autoIncrement: true });
                }
                tblName = Constants.tblAttractionCategory;
                if (!db.objectStoreNames.contains(tblName)) {
                    db.createObjectStore(tblName, { autoIncrement: true });
                }

                callback();

            };
            req.onerror = function(event: any) {

            };
        } catch (e) {
            this.errorParameters = {};
            this.errorParameters.dbName = dbName;
            Error.prototype.logError("IndexDbMain", "indexConnectionOpen", this.errorParameters, e);
        }
    }
}