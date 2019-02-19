
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BusinessEntites.Admin;
using Dapper;
using Interfaces;
using BusinessEntites;
using BusinessEntites.Common;
using BusinessEntites.DataBaseModels;

namespace DataAccessLayer.Admin
{
    public class MasterCategory : IMasterCategory, IDisposable
    {
        public List<MasterCategoryDTO> Admin_MasterCategoryCheckExists(string categoryName, int categoryId)
        {
            try
            {
                List<MasterCategoryDTO> _returnResult = SqlHelper.QuerySP<MasterCategoryDTO>("Admin_MasterCategoryCheckExists",
                    new
                    {
                        CategoryId = categoryId,
                        CategoryName = categoryName
                    }).ToList();
                return _returnResult;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<BreakInformation> Admin_BreakInformationCheckExists(int breakInformationId, string breakType)
        {
            try
            {
                var _returnResult = SqlHelper.QuerySP<BreakInformation>("Admin_BreakInformationCheckExists",
                    new
                    {
                        BreakInformationId = breakInformationId,
                        BreakType = breakType
                    }).ToList();
                return _returnResult;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<MasterCategoryDTO> Admin_MasterCategoryGet()
        {
            try
            {
                List<MasterCategoryDTO> _returnResult = SqlHelper.QuerySP<MasterCategoryDTO>("Admin_MasterCategoryGet").ToList();
                return _returnResult;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public MasterCategoryDTO Admin_MasterCategoryOnCategoryId(int categoryId)
        {
            try
            {
                MasterCategoryDTO _returnResult = SqlHelper.QuerySP<MasterCategoryDTO>("Admin_MasterCategoryOnCategoryId",
                    new
                    {
                        CategoryId = categoryId
                    }).ToList().FirstOrDefault();
                return _returnResult;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void Admin_MasterCategoryUpdate(int categoryId, string categoryName,string viewTime)
        {
            try
            {
                SqlHelper.QuerySP("Admin_MasterCategoryUpdate",
                    new
                    {
                        CategoryId = categoryId,
                        CategoryName = categoryName,
                        ViewTime = viewTime
                    });
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void Admin_MasterBreakInfoUpdate(int breakInformationId, string breakType, string startTime,string minimumTime,string display,string endTime)
        {
            try
            {
                SqlHelper.QuerySP("Admin_MasterBreakInfoUpdate",
                    new
                    {
                        BreakInformationId = breakInformationId,
                        BreakType = breakType,
                        StartTime = startTime,
                        MinimumTime = minimumTime,
                        Display = display,
                        EndTime = endTime
                    });
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<MasterTravelModeDTO> Scheduler_GetTravelMode()
        {
            try
            {

                List<MasterTravelModeDTO> _returnResult = SqlHelper.QuerySP<MasterTravelModeDTO>("Scheduler_GetTravelMode").ToList();
                return _returnResult;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<BreakInformation> Admin_TravelModeCheckExists(int travelModeId, string travelType)
        {
            try
            {
                var _returnResult = SqlHelper.QuerySP<BreakInformation>("Admin_TravelModeCheckExists",
                    new
                    {
                        TravelModeId = travelModeId,
                        TravelType = travelType
                    }).ToList();
                return _returnResult;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public void Admin_TravelModeUpdate(int travelModeId, string travelType)
        {
            try
            {
                SqlHelper.QuerySP("Admin_TravelModeUpdate",
                    new
                    {
                        TravelModeId = travelModeId,
                        TravelType = travelType
                    });
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<MasterGoogleType> Admin_MasterGoogleTypeGet()
        {
            try
            {

                List<MasterGoogleType> _returnResult = SqlHelper.QuerySP<MasterGoogleType>("Admin_MasterGoogleTypeGet").ToList();
                return _returnResult;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<MasterGoogleType> Admin_MasterGoogleTypeCheckExists(int googleTypeID, string typeName)
        {
            try
            {
                var _returnResult = SqlHelper.QuerySP<MasterGoogleType>("Admin_MasterGoogleTypeCheckExists",
                    new
                    {
                        GoogleTypeID = googleTypeID,
                        TypeName = typeName
                    }).ToList();
                return _returnResult;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public void Admin_MasterGoogleTypeUpdate(MasterGoogleType masterGoogleType)
        {
            try
            {
                SqlHelper.QuerySP("Admin_MasterGoogleTypeUpdate",
                    new
                    {
                        GoogleTypeID = masterGoogleType.GoogleTypeID,
                        TypeName = masterGoogleType.TypeName,
                        IsNeeded = masterGoogleType.IsNeeded,
                        DisplayForUser = masterGoogleType.DisplayForUser,
                        ViewTime = masterGoogleType.ViewTime,
                        ExtraSearch= masterGoogleType.ExtraSearch
                    });
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<Admin_MasterCategoryXMasterGoogleType> Admin_MasterCategoryXMasterGoogleType()
        {
            try
            {
                var _returnResult = SqlHelper.QuerySP<Admin_MasterCategoryXMasterGoogleType>("Admin_MasterCategoryXMasterGoogleType").ToList();
                return _returnResult;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void Dispose()
        {
            GC.SuppressFinalize(this);
        }
    }
}
