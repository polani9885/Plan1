﻿using BusinessEntites;
using BusinessEntites.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessAccessLayer.Interfaces
{
    public interface ISchedulers
    {
        AttractionsDTO Services_CheckAttractionExist(string googleSearchText);

        void Service_TravelDistance(List<user_AttractionTravelTimeDistance> attractionTravelTimeDistance);

        int Services_AddAttraction(AttractionsDTO attractionDTO, List<userTable_Category> Category, List<user_AttractionsActiveStatus> attractionsActiveStatus);

        List<AttractionsDTO> Services_GetPlaceDetails(List<userTable_OnlyId> attractionIds, int SourceAttractionId);

        List<AttractionsDTO> Service_GetSearchTextNotCorrect();
    }
}
