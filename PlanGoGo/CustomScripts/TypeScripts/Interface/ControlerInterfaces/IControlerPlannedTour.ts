interface IControlerPlannedTour extends ng.IScope {
    plannedTour: Array<IPlannedTour>;
    userSelectedTripInfo: any;
    countryList: Array<ICountryList>;
    tourScheduleUrl:string;
}