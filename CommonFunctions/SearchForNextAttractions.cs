using BusinessEntites;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CommonFunctions
{
    public class SearchForNextAttractions
    {
        public List<Coordinate> GetBoundingCoords(double centerLat, double centerLong, double distance)
        {
            List<Coordinate> listCoordinate = new List<Coordinate>();

            List<Coordinate> listCoordinateoutPut = new List<Coordinate>();

            Coordinate top = MaxLatLongOnBearing(centerLat, centerLong, 45, distance);
            Coordinate right = MaxLatLongOnBearing(centerLat, centerLong, 135, distance);
            Coordinate bottom = MaxLatLongOnBearing(centerLat, centerLong, 225, distance);
            Coordinate left = MaxLatLongOnBearing(centerLat, centerLong, 315, distance);

            listCoordinate.Add(top);
            listCoordinate.Add(right);
            listCoordinate.Add(bottom);
            listCoordinate.Add(left);

            Coordinate least = new Coordinate
            {
                Latitude = listCoordinate.Min(x => x.Latitude),
                Longitude = listCoordinate.Min(x => x.Longitude),
                Least = true
            };

            listCoordinateoutPut.Add(least);

            least = new Coordinate
            {
                Latitude = listCoordinate.Max(x => x.Latitude),
                Longitude = listCoordinate.Max(x => x.Longitude),
                Least = false
            };

            listCoordinateoutPut.Add(least);

            return listCoordinateoutPut;

        }

        public Coordinate MaxLatLongOnBearing(double centerLat, double centerLong, double bearing, double distance)
        {

            var lonRads = ToRadian(centerLong);
            var latRads = ToRadian(centerLat);
            var bearingRads = ToRadian(bearing);
            var maxLatRads = Math.Asin(Math.Sin(latRads) * Math.Cos(distance / 6371) + Math.Cos(latRads) * Math.Sin(distance / 6371) * Math.Cos(bearingRads));
            var maxLonRads = lonRads + Math.Atan2((Math.Sin(bearingRads) * Math.Sin(distance / 6371) * Math.Cos(latRads)), (Math.Cos(distance / 6371) - Math.Sin(latRads) * Math.Sin(maxLatRads)));

            var maxLat = RadiansToDegrees(maxLatRads);
            var maxLong = RadiansToDegrees(maxLonRads);

            return new Coordinate() { Latitude = maxLat, Longitude = maxLong };
        }

        private double RadiansToDegrees(double radians)
        {
            return radians * (180 / Math.PI);
        }

        private double ToRadian(double angle)
        {
            return (Math.PI / 180) * angle;
        }
    }
}
