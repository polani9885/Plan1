using BusinessEntites.Common;
using Dapper;
using DataAccessLayer.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Common
{
    public class Attractions: IAttractions, IDisposable
    {
        public void AttractionsUpdate(AttractionsDTO attractionsDTO)
        {
            try
            {
                SqlHelper.QuerySP("AttractionsUpdate",
                     new
                     {
                         AttractionsId = attractionsDTO.AttractionsId,
                         AttractionName = attractionsDTO.AttractionName,
                         AddressOne = (string.IsNullOrEmpty(attractionsDTO.AddressOne) ? "" :attractionsDTO.AddressOne),
                         AddressTwo = (string.IsNullOrEmpty(attractionsDTO.AddressTwo) ? "" : attractionsDTO.AddressTwo),
                         CityId = (string.IsNullOrEmpty(attractionsDTO.CityId.ToString()) ? 0 : attractionsDTO.CityId),
                         CategoryId = (string.IsNullOrEmpty(attractionsDTO.CategoryId.ToString()) ? 0 : attractionsDTO.CategoryId),
                         Longitude = (string.IsNullOrEmpty(attractionsDTO.Longitude) ? "" : attractionsDTO.Longitude),
                         Latitude = (string.IsNullOrEmpty(attractionsDTO.Longitude) ? "" : attractionsDTO.Longitude),
                         PlaceId = (string.IsNullOrEmpty(attractionsDTO.PlaceId) ? "" : attractionsDTO.PlaceId),
                         RankId = (string.IsNullOrEmpty(attractionsDTO.RankId.ToString()) ? 0 : attractionsDTO.RankId),
                         CreatedBy = (string.IsNullOrEmpty(attractionsDTO.CreatedBy) ? "" : attractionsDTO.CreatedBy),
                         GoogleSearchText = (string.IsNullOrEmpty(attractionsDTO.GoogleSearchText) ? "" : attractionsDTO.GoogleSearchText),
                         GoogleWebSite = (string.IsNullOrEmpty(attractionsDTO.GoogleWebSite) ? "" : attractionsDTO.GoogleWebSite),
                         GoogleICon = (string.IsNullOrEmpty(attractionsDTO.GoogleICon) ? "" : attractionsDTO.GoogleICon),
                         GoogleInternational_phone_number = (string.IsNullOrEmpty(attractionsDTO.GoogleInternational_phone_number) ? "" : attractionsDTO.GoogleInternational_phone_number),
                         Googleadr_address = (string.IsNullOrEmpty(attractionsDTO.Googleadr_address) ? "" : attractionsDTO.Googleadr_address),
                         GoogleName = (string.IsNullOrEmpty(attractionsDTO.GoogleName) ? "" : attractionsDTO.GoogleName),
                         GoogleRating = (string.IsNullOrEmpty(attractionsDTO.GoogleRating) ? "" : attractionsDTO.GoogleRating),
                         GoogleUser_ratings_total = (string.IsNullOrEmpty(attractionsDTO.GoogleUser_ratings_total.ToString()) ? 0 : attractionsDTO.GoogleUser_ratings_total)
                     });
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<AttractionsDTO> AttractionsCheckExists(AttractionsDTO attractionsDTO)
        {
            try
            {
                List<AttractionsDTO> _returnResult = SqlHelper.QuerySP<AttractionsDTO>("AttractionsCheckExists",
                    new
                    {
                        AttractionsId = attractionsDTO.AttractionsId,
                        AttractionName = attractionsDTO.AttractionName,
                        CityId = attractionsDTO.CityId
                    }).ToList();
                return _returnResult;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<AttractionsDTO> AttractionsOnCityId(AttractionsDTO attractionsDTO)
        {
            try
            {
                List<AttractionsDTO> _returnResult = SqlHelper.QuerySP<AttractionsDTO>("AttractionsOnCityId",
                    new
                    {
                        CityId = attractionsDTO.CityId
                    }).ToList();
                return _returnResult;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


        public AttractionsDTO AttractionsOnAttractionsId(AttractionsDTO attractionsDTO)
        {
            try
            {
                List<AttractionsDTO> _returnResult = SqlHelper.QuerySP<AttractionsDTO>("AttractionsOnAttractionsId",
                    new
                    {
                        AttractionsId = attractionsDTO.AttractionsId
                    }).ToList();
                return _returnResult.FirstOrDefault();
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
