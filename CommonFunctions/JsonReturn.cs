using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;
using System.Runtime.Serialization.Json;

namespace CommonFunctions
{
    public class JsonReturn:Controller
    {
        public JsonResult JsonResult<T>(List<T> data)
        {
            if (data.Count > 0)
            {
                var jsonResults = Json(data, JsonRequestBehavior.AllowGet);
                jsonResults.MaxJsonLength = int.MaxValue;
                return jsonResults;
            }
            else
            {
                return Json(new List<T>(), JsonRequestBehavior.AllowGet);
            }
        }

        public JsonResult JsonResult<T>(T data)
        {
            if (data!=null)
            {
                var jsonResults = Json(data, JsonRequestBehavior.AllowGet);
                jsonResults.MaxJsonLength = int.MaxValue;
                return jsonResults;
            }
            else
            {
                return Json(new List<T>(), JsonRequestBehavior.AllowGet);
            }
        }
    }
}
