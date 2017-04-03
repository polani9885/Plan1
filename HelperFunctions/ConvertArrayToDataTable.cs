using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace HelperFunctions
{
    public class ConvertArrayToDataTable
    {
        public static DataTable GetDataTableCateogry(object[] inArray)
        {
            
            //create our datatable
            DataTable dt = new DataTable();

            dt.Columns.Add("Category", typeof(string));


            //loop through each object in the array
            foreach (object o in inArray)
            {
                DataRow dr = dt.NewRow();
                dr["Category"] = o;
                //add the row to our table
                dt.Rows.Add(dr);
            }
            
            return dt;

        }
    }
}
