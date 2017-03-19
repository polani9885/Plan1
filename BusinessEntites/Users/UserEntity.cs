using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntites.Users
{
    [DataContract]
    public class UserEntity
    {
        [DataMember]
        public int UserId { get; set; }
        [DataMember]
        public string UserName { get; set; }
        [DataMember]
        public string Email { get; set; }
        [DataMember]
        public string Password { get; set; }
        [DataMember]
        public int GooglePlusId { get; set; }
        [DataMember]
        public int FaceBookId { get; set; }
        [DataMember]
        public int MasterCountryId { get; set; }
        [DataMember]
        public int MasterStateId { get; set; }
        [DataMember]
        public int MasterCityId { get; set; }
        [DataMember]
        public string AddressOne { get; set; }
        [DataMember]
        public string AddressTwo { get; set; }
        [DataMember]
        public string ZipCode { get; set; }
        [DataMember]
        public string PhoneNumber { get; set; }
        [DataMember]
        public DateTime CreatedUTCDate { get; set; }
        [DataMember]
        public DateTime ModifiedUTCDate { get; set; }
        [DataMember]
        public string ModifiedBy { get; set; }
    }
}
