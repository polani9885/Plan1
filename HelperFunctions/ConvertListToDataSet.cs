using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace HelperFunctions
{
    public static class ConvertListToDataSet
    {
        public static DataTable ToDataTable<T>(this IList<T> data)
        {
            PropertyDescriptorCollection props =
                TypeDescriptor.GetProperties(typeof(T));
            DataTable table = new DataTable();
            for (int i = 0; i < props.Count; i++)
            {
                PropertyDescriptor prop = props[i];
                table.Columns.Add(prop.Name, prop.PropertyType);
            }
            object[] values = new object[props.Count];
            foreach (T item in data)
            {
                for (int i = 0; i < values.Length; i++)
                {
                    values[i] = props[i].GetValue(item);
                }
                table.Rows.Add(values);
            }
            return table;
        }


        public static List<T> ConvertDataTable<T>(DataTable dt)
        {
            List<T> data = new List<T>();
            foreach (DataRow row in dt.Rows)
            {
                T item = GetItem<T>(row);
                data.Add(item);
            }
            return data;
        }
        private static T GetItem<T>(DataRow dr)
        {
            Type temp = typeof(T);
            T obj = Activator.CreateInstance<T>();

            foreach (DataColumn column in dr.Table.Columns)
            {
                foreach (PropertyInfo pro in temp.GetProperties())
                {
                    if (pro.Name == column.ColumnName)
                    {
                        if (string.IsNullOrEmpty(dr[column.ColumnName].ToString()))
                        {
                            if (column.DataType == Type.GetType("System.String"))
                            {
                                pro.SetValue(obj, "", null);
                            }
                            else if (column.DataType == Type.GetType("System.Int32"))
                            {
                                pro.SetValue(obj, 0, null);
                            }
                            else if (column.DataType == Type.GetType("System.Boolean"))
                            {
                                pro.SetValue(obj, false, null);
                            }
                            else if (column.DataType == Type.GetType("System.TimeSpan"))
                            {
                                pro.SetValue(obj, default(TimeSpan), null);
                            }
                            else if (column.DataType == Type.GetType("System.DateTime"))
                            {
                                pro.SetValue(obj, default(DateTime), null);
                            }
                            else if (column.DataType == Type.GetType("System.Decimal"))
                            {
                                pro.SetValue(obj, 0, null);
                            }
                            else if (column.DataType == Type.GetType("System.Byte[]"))
                            {
                                pro.SetValue(obj, new byte(), null);
                            }
                            else if (column.DataType == Type.GetType("System.Char"))
                            {
                                pro.SetValue(obj, ' ', null);
                            }
                        }
                        else
                        {
                            pro.SetValue(obj, dr[column.ColumnName], null);
                        }
                        break;
                    }
                    else
                        // ReSharper disable once RedundantJumpStatement
                        continue;
                }
            }
            return obj;
        }
    }
}
