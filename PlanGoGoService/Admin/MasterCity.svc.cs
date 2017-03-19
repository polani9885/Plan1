using BusinessEntites.Admin;
using PlanGoGoService.BaseClasses;
using PlanGoGoService.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;

namespace PlanGoGoService.Admin
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the class name "ModelCity" in code, svc and config file together.
    // NOTE: In order to launch WCF Test Client for testing this service, please select ModelCity.svc or ModelCity.svc.cs at the Solution Explorer and start debugging.
    public class MasterCity : BaseReference, IMasterCity
    {
        public List<MasterCityDTO> Admin_MasterCityCheckExists(MasterCityDTO masterCityDTO)
        {
            try
            {
                return _businessMasterCity.Admin_MasterCityCheckExists(masterCityDTO);
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }

        public List<MasterCityDTO> Admin_MasterCityGet()
        {
            try
            {
                return _businessMasterCity.Admin_MasterCityGet();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public MasterCityDTO Admin_MasterCityGetOnCityId(int cityId)
        {
            try
            {
                return _businessMasterCity.Admin_MasterCityGetOnCityId(cityId);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<MasterCityDTO> Admin_MasterCityGetOnStateId(int stateId)
        {
            try
            {
                return _businessMasterCity.Admin_MasterCityGetOnStateId(stateId);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void Admin_MasterCityUpdate(MasterCityDTO masterCityDTO)
        {
            try
            {
                _businessMasterCity.Admin_MasterCityUpdate(masterCityDTO);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
