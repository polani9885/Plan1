using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;


namespace OCCC.DAL
{
    public class BaseDAL
    {
        #region Private Fields

        private string _connectionString;        

        #endregion

        #region Constructor

        public BaseDAL()
        {
            try
            {
                // Set the provider-specific connection string.
                //_connectionString = DecryptConnectionString(ConfigurationManager.ConnectionStrings["OCCCconnectionString"].ConnectionString);
                _connectionString = ConfigurationManager.ConnectionStrings["ConnectionString"].ConnectionString;                
            }
            catch (Exception ex)
            {
                // Log the exception here
            }
        }

        #endregion

        #region Public Properties

        public string ConnectionString
        {
            get { return _connectionString; }
        }

        

        #endregion

        

        #region Private Methods

       

        public static DataTable ToDataTable<T>(T entity) where T : class
        {
            var properties = typeof(T).GetProperties();
            var table = new DataTable();

            foreach (var property in properties)
            {
                table.Columns.Add(property.Name, Nullable.GetUnderlyingType(property.PropertyType) ?? property.PropertyType);
            }

            table.Rows.Add(properties.Select(p => p.GetValue(entity, null)).ToArray());
            return table;
        }


        #endregion
    }
}
