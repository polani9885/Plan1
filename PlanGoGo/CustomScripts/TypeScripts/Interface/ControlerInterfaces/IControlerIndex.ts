interface IControlerIndex extends ng.IScope {
    categoryList: any;
    filterCategoryList: any;
    masterCategoryList: any;
    travelModeId: any;
    sourceAttractionId: any;
    destinationAttractionId: any;
    startDate: any;
    startTime: any;
    attractionList: any;
    filterAttractionList: any;
    filterAttractionListAutoSelect: any;
    attractionListAutoComplete: any;
    attractionListBreakAutoComplete: any;
    attractionInterestedList: any;
    countryId: number;
    cityId: number;
    selectedCityLabel: string;
    visitCityList: any;
    mainCategorySelected:number;
    categoryPlaceSearch:string;
    updatedBreaks: any;
    userTripBuildStatus: any;

    orderOfAttractionList: any;
    extraCategoryList: any;
    breakValue: any;
    nearLocations: any;
    selectedExtraCategoryList: any;

    filterNearLocations: any;
    images: any;
    googleMapsMainMarks: any;
    googleMapsLinesMarks: any;
    googleMapsStepMarks: any;

    userRequestedOrder: any;
    attractionTravelStepsNearAttractionInfo: any;
    getAttractionsNextAttractions: any;

    checkItFinalRequestOrNot: any;
    attractionXCategory: any;

    currentIndex: number;

    oneToTen: Array<number>;

    isDistanceCalcuationMissing: boolean;

    mapLineColor: Array<string>;

    getAttractionsNextAttractionsAjaxRequest: any;

    getAttractionTravelStepsNearAttractionInfoAjaxRequest: any;
    getAttractionXCategoryAjaxRequest: any;

    userTripId: number;

    mapselectedCategoryList: any;

    attractionTravelStepsId: number;
    orderId: number;
    updateDayEndTime: string;
    updateDayStartTime: string;
    updatedBreakFastTime: string;
    updatedLunchTime: string;
    updatedBreakTime: string;
    updatedDinnerTime: string;
    selectedCategoryList: any;
    categoryStyleLeft: any;
    categoryStyleRight:any;
    googleMaps: any;
    googleTravelStep: any;
    
}