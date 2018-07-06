﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace GoogleMapsWebAPI.Scheduler {
    
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    [System.ServiceModel.ServiceContractAttribute(ConfigurationName="Scheduler.ISchedulers")]
    public interface ISchedulers {
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/ISchedulers/Services_CheckAttractionExist", ReplyAction="http://tempuri.org/ISchedulers/Services_CheckAttractionExistResponse")]
        BusinessEntites.Common.AttractionsDTO Services_CheckAttractionExist(string googleSearchText);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/ISchedulers/Services_CheckAttractionExist", ReplyAction="http://tempuri.org/ISchedulers/Services_CheckAttractionExistResponse")]
        System.Threading.Tasks.Task<BusinessEntites.Common.AttractionsDTO> Services_CheckAttractionExistAsync(string googleSearchText);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/ISchedulers/Service_TravelDistance", ReplyAction="http://tempuri.org/ISchedulers/Service_TravelDistanceResponse")]
        void Service_TravelDistance(System.Collections.Generic.List<BusinessEntites.user_AttractionTravelTimeDistance> attractionTravelTimeDistance);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/ISchedulers/Service_TravelDistance", ReplyAction="http://tempuri.org/ISchedulers/Service_TravelDistanceResponse")]
        System.Threading.Tasks.Task Service_TravelDistanceAsync(System.Collections.Generic.List<BusinessEntites.user_AttractionTravelTimeDistance> attractionTravelTimeDistance);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/ISchedulers/Services_AddAttraction", ReplyAction="http://tempuri.org/ISchedulers/Services_AddAttractionResponse")]
        int Services_AddAttraction(BusinessEntites.Common.AttractionsDTO attractionDTO, System.Collections.Generic.List<BusinessEntites.userTable_Category> Category, System.Collections.Generic.List<BusinessEntites.user_AttractionsActiveStatus> attractionsActiveStatus);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/ISchedulers/Services_AddAttraction", ReplyAction="http://tempuri.org/ISchedulers/Services_AddAttractionResponse")]
        System.Threading.Tasks.Task<int> Services_AddAttractionAsync(BusinessEntites.Common.AttractionsDTO attractionDTO, System.Collections.Generic.List<BusinessEntites.userTable_Category> Category, System.Collections.Generic.List<BusinessEntites.user_AttractionsActiveStatus> attractionsActiveStatus);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/ISchedulers/Services_GetPlaceDetails", ReplyAction="http://tempuri.org/ISchedulers/Services_GetPlaceDetailsResponse")]
        System.Collections.Generic.List<BusinessEntites.Common.AttractionsDTO> Services_GetPlaceDetails(System.Collections.Generic.List<BusinessEntites.userTable_OnlyId> attractionIds, int SourceAttractionId);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/ISchedulers/Services_GetPlaceDetails", ReplyAction="http://tempuri.org/ISchedulers/Services_GetPlaceDetailsResponse")]
        System.Threading.Tasks.Task<System.Collections.Generic.List<BusinessEntites.Common.AttractionsDTO>> Services_GetPlaceDetailsAsync(System.Collections.Generic.List<BusinessEntites.userTable_OnlyId> attractionIds, int SourceAttractionId);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/ISchedulers/Service_GetSearchTextNotCorrect", ReplyAction="http://tempuri.org/ISchedulers/Service_GetSearchTextNotCorrectResponse")]
        System.Collections.Generic.List<BusinessEntites.Common.AttractionsDTO> Service_GetSearchTextNotCorrect();
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/ISchedulers/Service_GetSearchTextNotCorrect", ReplyAction="http://tempuri.org/ISchedulers/Service_GetSearchTextNotCorrectResponse")]
        System.Threading.Tasks.Task<System.Collections.Generic.List<BusinessEntites.Common.AttractionsDTO>> Service_GetSearchTextNotCorrectAsync();
    }
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    public interface ISchedulersChannel : GoogleMapsWebAPI.Scheduler.ISchedulers, System.ServiceModel.IClientChannel {
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    public partial class SchedulersClient : System.ServiceModel.ClientBase<GoogleMapsWebAPI.Scheduler.ISchedulers>, GoogleMapsWebAPI.Scheduler.ISchedulers {
        
        public SchedulersClient() {
        }
        
        public SchedulersClient(string endpointConfigurationName) : 
                base(endpointConfigurationName) {
        }
        
        public SchedulersClient(string endpointConfigurationName, string remoteAddress) : 
                base(endpointConfigurationName, remoteAddress) {
        }
        
        public SchedulersClient(string endpointConfigurationName, System.ServiceModel.EndpointAddress remoteAddress) : 
                base(endpointConfigurationName, remoteAddress) {
        }
        
        public SchedulersClient(System.ServiceModel.Channels.Binding binding, System.ServiceModel.EndpointAddress remoteAddress) : 
                base(binding, remoteAddress) {
        }
        
        public BusinessEntites.Common.AttractionsDTO Services_CheckAttractionExist(string googleSearchText) {
            return base.Channel.Services_CheckAttractionExist(googleSearchText);
        }
        
        public System.Threading.Tasks.Task<BusinessEntites.Common.AttractionsDTO> Services_CheckAttractionExistAsync(string googleSearchText) {
            return base.Channel.Services_CheckAttractionExistAsync(googleSearchText);
        }
        
        public void Service_TravelDistance(System.Collections.Generic.List<BusinessEntites.user_AttractionTravelTimeDistance> attractionTravelTimeDistance) {
            base.Channel.Service_TravelDistance(attractionTravelTimeDistance);
        }
        
        public System.Threading.Tasks.Task Service_TravelDistanceAsync(System.Collections.Generic.List<BusinessEntites.user_AttractionTravelTimeDistance> attractionTravelTimeDistance) {
            return base.Channel.Service_TravelDistanceAsync(attractionTravelTimeDistance);
        }
        
        public int Services_AddAttraction(BusinessEntites.Common.AttractionsDTO attractionDTO, System.Collections.Generic.List<BusinessEntites.userTable_Category> Category, System.Collections.Generic.List<BusinessEntites.user_AttractionsActiveStatus> attractionsActiveStatus) {
            return base.Channel.Services_AddAttraction(attractionDTO, Category, attractionsActiveStatus);
        }
        
        public System.Threading.Tasks.Task<int> Services_AddAttractionAsync(BusinessEntites.Common.AttractionsDTO attractionDTO, System.Collections.Generic.List<BusinessEntites.userTable_Category> Category, System.Collections.Generic.List<BusinessEntites.user_AttractionsActiveStatus> attractionsActiveStatus) {
            return base.Channel.Services_AddAttractionAsync(attractionDTO, Category, attractionsActiveStatus);
        }
        
        public System.Collections.Generic.List<BusinessEntites.Common.AttractionsDTO> Services_GetPlaceDetails(System.Collections.Generic.List<BusinessEntites.userTable_OnlyId> attractionIds, int SourceAttractionId) {
            return base.Channel.Services_GetPlaceDetails(attractionIds, SourceAttractionId);
        }
        
        public System.Threading.Tasks.Task<System.Collections.Generic.List<BusinessEntites.Common.AttractionsDTO>> Services_GetPlaceDetailsAsync(System.Collections.Generic.List<BusinessEntites.userTable_OnlyId> attractionIds, int SourceAttractionId) {
            return base.Channel.Services_GetPlaceDetailsAsync(attractionIds, SourceAttractionId);
        }
        
        public System.Collections.Generic.List<BusinessEntites.Common.AttractionsDTO> Service_GetSearchTextNotCorrect() {
            return base.Channel.Service_GetSearchTextNotCorrect();
        }
        
        public System.Threading.Tasks.Task<System.Collections.Generic.List<BusinessEntites.Common.AttractionsDTO>> Service_GetSearchTextNotCorrectAsync() {
            return base.Channel.Service_GetSearchTextNotCorrectAsync();
        }
    }
}
