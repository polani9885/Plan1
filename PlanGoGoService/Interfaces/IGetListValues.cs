﻿using BusinessEntites;
using System;
using System.Collections.Generic;
using System.Linq;
using System.ServiceModel;
using System.Web;

namespace PlanGoGoService.Interfaces
{
    [ServiceContract]
    public interface IGetListValues
    {
        [OperationContract]
        List<public_GetCityList> Public_GetCityList();

        [OperationContract]
        List<Public_GetCategory> Public_GetCategory();

        [OperationContract]
        List<Public_GetMasterCategory> Public_GetMasterCategory();

        [OperationContract]
        List<public_FilterAttractions> Public_FilterAttractions(string enterLocationName, List<userTable_Category> categoryList, int countryId, int cityId);

        [OperationContract]
        List<GetOrderOfAttractionVisit> Public_GetOrderOfAttractionVisit(int TravelModeId, int SourceAttractionID, int DestinationAttractionID, List<userTable_OnlyId> AttractionID, string StartDate, string StartTime, List<GetOrderOfAttractionVisit> listGetOrderOfAttractionVisit,int CountryId);

        [OperationContract]
        List<GetAttractionOpenTime> GetAttractionOpenTime(int AttractionId);
    }
}