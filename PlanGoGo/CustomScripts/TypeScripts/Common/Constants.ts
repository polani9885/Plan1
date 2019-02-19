export class Constants {
    //it contain all the autocomplete city information
    public cityList = [];
    public selectedCategoryList = [];
    public attractionList = [];
    public googleAPI: string = "https://maps.googleapis.com/maps/api";
    public googleAPIKey: string = "AIzaSyBHcSbAr_gsAYNyt-_0m2eKWpvAZxwhX7w";
    public increment = 0;
    public autCompleteSelectionIsDone = false;
    public webAPIURL: string = "http://localhost:63939/";
    public static localUrl: string = "http://localhost/PlanGoGo/";
    public mouseX: number;
    public mouseY: number;

    //weather.api
    //used polaniservices@gmail.com
    public app_id: string = "TkQvsIq3k3gVat04gzTK";
    public app_code: string = "g0w6b1l81r4s1juiPuwEug";
    public googleMaps:any;

    //index db table names
    public static tblDesinationNearyBy: string = "DesinationNearBy";
    public static tblTravelBreakNearBy: string = "TravelBreakNearBy";
    public static tblAttractionCategory: string = "AttractionCategory";
    public static userTripDataBasePrefix:string = "UserTrip_";
    public static loopCountercounter: number = 0;

}