import {Error} from "../Modules/Error";

export class CommonFunctions {
    public errorParameters: any = {};


    // Read a page's GET URL variables and return them as an associative array.
    public getUrlVars() {
        try {
            let vars: any = [], hash;

            let hashes: any = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
            for (var i = 0; i < hashes.length; i++) {
                hash = hashes[i].split('=');
                vars.push(hash[0]);
                vars[hash[0]] = hash[1];
            }
            return vars;
        } catch (e) {
            this.errorParameters = {};
            Error.prototype.logError("CommonFunctions", "getUrlVars", this.errorParameters, e);
        }
    }

    public convertTo12Hour(time:string) {   // Take a time in 24 hour format and format it in 12 hour format
        try {
            
        let timePartArray:any = time.split(":");
        let  ampm:string = 'AM';


        if (timePartArray[0] >= 12) {
            ampm = 'PM';
        }

        if (timePartArray[0] > 12) {
            timePartArray[0] = timePartArray[0] - 12;
        }

            let formattedTime: string = timePartArray[0] +
                ':' +
                timePartArray[1] +
                (timePartArray.length > 2 ? ':' + timePartArray[2] : '') +
                ' ' +
                ampm;

        return formattedTime;
        } catch (e) {
            this.errorParameters = {};
            Error.prototype.logError("CommonFunctions", "convertTo12Hour", this.errorParameters, e);
        }
    }

    public convertTo24Hour(time: string) {
        try {
            let hours:number = parseInt(time.substr(0, 2));
            if (time.indexOf('AM') !== -1 && hours === 12) {
                time = time.replace('12', '0');
            }
            if (time.indexOf('PM') !== -1 && hours < 12) {
                time = time.replace(hours.toString(), (hours + 12).toString());
            }
            return time.replace(/(AM|PM)/, '');
        } catch (e) {
            this.errorParameters = {};
            Error.prototype.logError("CommonFunctions", "convertTo24Hour", this.errorParameters, e);
        }
    }
}
