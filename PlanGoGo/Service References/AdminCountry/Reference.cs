﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace PlanGoGo.AdminCountry {
    
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    [System.ServiceModel.ServiceContractAttribute(ConfigurationName="AdminCountry.ICountry")]
    public interface ICountry {
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/ICountry/Admin_UpdateCountry", ReplyAction="http://tempuri.org/ICountry/Admin_UpdateCountryResponse")]
        void Admin_UpdateCountry(int countryId, string countryName, string countryShortName, string createdBy, bool isDefault);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/ICountry/Admin_UpdateCountry", ReplyAction="http://tempuri.org/ICountry/Admin_UpdateCountryResponse")]
        System.Threading.Tasks.Task Admin_UpdateCountryAsync(int countryId, string countryName, string countryShortName, string createdBy, bool isDefault);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/ICountry/Admin_GetCountry", ReplyAction="http://tempuri.org/ICountry/Admin_GetCountryResponse")]
        System.Collections.Generic.List<BusinessEntites.Admin.MasterCountryDTO> Admin_GetCountry();
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/ICountry/Admin_GetCountry", ReplyAction="http://tempuri.org/ICountry/Admin_GetCountryResponse")]
        System.Threading.Tasks.Task<System.Collections.Generic.List<BusinessEntites.Admin.MasterCountryDTO>> Admin_GetCountryAsync();
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/ICountry/Admin_CheckCountryExist", ReplyAction="http://tempuri.org/ICountry/Admin_CheckCountryExistResponse")]
        System.Collections.Generic.List<BusinessEntites.Admin.MasterCountryDTO> Admin_CheckCountryExist(string countryName, int countryId);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/ICountry/Admin_CheckCountryExist", ReplyAction="http://tempuri.org/ICountry/Admin_CheckCountryExistResponse")]
        System.Threading.Tasks.Task<System.Collections.Generic.List<BusinessEntites.Admin.MasterCountryDTO>> Admin_CheckCountryExistAsync(string countryName, int countryId);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/ICountry/Admin_GetCountryOnId", ReplyAction="http://tempuri.org/ICountry/Admin_GetCountryOnIdResponse")]
        BusinessEntites.Admin.MasterCountryDTO Admin_GetCountryOnId(int countryId);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/ICountry/Admin_GetCountryOnId", ReplyAction="http://tempuri.org/ICountry/Admin_GetCountryOnIdResponse")]
        System.Threading.Tasks.Task<BusinessEntites.Admin.MasterCountryDTO> Admin_GetCountryOnIdAsync(int countryId);
    }
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    public interface ICountryChannel : PlanGoGo.AdminCountry.ICountry, System.ServiceModel.IClientChannel {
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    public partial class CountryClient : System.ServiceModel.ClientBase<PlanGoGo.AdminCountry.ICountry>, PlanGoGo.AdminCountry.ICountry {
        
        public CountryClient() {
        }
        
        public CountryClient(string endpointConfigurationName) : 
                base(endpointConfigurationName) {
        }
        
        public CountryClient(string endpointConfigurationName, string remoteAddress) : 
                base(endpointConfigurationName, remoteAddress) {
        }
        
        public CountryClient(string endpointConfigurationName, System.ServiceModel.EndpointAddress remoteAddress) : 
                base(endpointConfigurationName, remoteAddress) {
        }
        
        public CountryClient(System.ServiceModel.Channels.Binding binding, System.ServiceModel.EndpointAddress remoteAddress) : 
                base(binding, remoteAddress) {
        }
        
        public void Admin_UpdateCountry(int countryId, string countryName, string countryShortName, string createdBy, bool isDefault) {
            base.Channel.Admin_UpdateCountry(countryId, countryName, countryShortName, createdBy, isDefault);
        }
        
        public System.Threading.Tasks.Task Admin_UpdateCountryAsync(int countryId, string countryName, string countryShortName, string createdBy, bool isDefault) {
            return base.Channel.Admin_UpdateCountryAsync(countryId, countryName, countryShortName, createdBy, isDefault);
        }
        
        public System.Collections.Generic.List<BusinessEntites.Admin.MasterCountryDTO> Admin_GetCountry() {
            return base.Channel.Admin_GetCountry();
        }
        
        public System.Threading.Tasks.Task<System.Collections.Generic.List<BusinessEntites.Admin.MasterCountryDTO>> Admin_GetCountryAsync() {
            return base.Channel.Admin_GetCountryAsync();
        }
        
        public System.Collections.Generic.List<BusinessEntites.Admin.MasterCountryDTO> Admin_CheckCountryExist(string countryName, int countryId) {
            return base.Channel.Admin_CheckCountryExist(countryName, countryId);
        }
        
        public System.Threading.Tasks.Task<System.Collections.Generic.List<BusinessEntites.Admin.MasterCountryDTO>> Admin_CheckCountryExistAsync(string countryName, int countryId) {
            return base.Channel.Admin_CheckCountryExistAsync(countryName, countryId);
        }
        
        public BusinessEntites.Admin.MasterCountryDTO Admin_GetCountryOnId(int countryId) {
            return base.Channel.Admin_GetCountryOnId(countryId);
        }
        
        public System.Threading.Tasks.Task<BusinessEntites.Admin.MasterCountryDTO> Admin_GetCountryOnIdAsync(int countryId) {
            return base.Channel.Admin_GetCountryOnIdAsync(countryId);
        }
    }
}
