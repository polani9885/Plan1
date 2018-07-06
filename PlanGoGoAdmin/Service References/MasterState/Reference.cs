﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace PlanGoGoAdmin.MasterState {
    
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    [System.ServiceModel.ServiceContractAttribute(ConfigurationName="MasterState.IMasterState")]
    public interface IMasterState {
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IMasterState/Admin_MasterStateUpdate", ReplyAction="http://tempuri.org/IMasterState/Admin_MasterStateUpdateResponse")]
        void Admin_MasterStateUpdate(BusinessEntites.Admin.MasterStateDTO masterStateDTO);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IMasterState/Admin_MasterStateUpdate", ReplyAction="http://tempuri.org/IMasterState/Admin_MasterStateUpdateResponse")]
        System.Threading.Tasks.Task Admin_MasterStateUpdateAsync(BusinessEntites.Admin.MasterStateDTO masterStateDTO);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IMasterState/Admin_MasterStateGet", ReplyAction="http://tempuri.org/IMasterState/Admin_MasterStateGetResponse")]
        System.Collections.Generic.List<BusinessEntites.Admin.MasterStateDTO> Admin_MasterStateGet();
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IMasterState/Admin_MasterStateGet", ReplyAction="http://tempuri.org/IMasterState/Admin_MasterStateGetResponse")]
        System.Threading.Tasks.Task<System.Collections.Generic.List<BusinessEntites.Admin.MasterStateDTO>> Admin_MasterStateGetAsync();
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IMasterState/Admin_MasterStateCheckExists", ReplyAction="http://tempuri.org/IMasterState/Admin_MasterStateCheckExistsResponse")]
        System.Collections.Generic.List<BusinessEntites.Admin.MasterStateDTO> Admin_MasterStateCheckExists(BusinessEntites.Admin.MasterStateDTO masterStateDTO);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IMasterState/Admin_MasterStateCheckExists", ReplyAction="http://tempuri.org/IMasterState/Admin_MasterStateCheckExistsResponse")]
        System.Threading.Tasks.Task<System.Collections.Generic.List<BusinessEntites.Admin.MasterStateDTO>> Admin_MasterStateCheckExistsAsync(BusinessEntites.Admin.MasterStateDTO masterStateDTO);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IMasterState/Admin_MasterStateGetOnStateId", ReplyAction="http://tempuri.org/IMasterState/Admin_MasterStateGetOnStateIdResponse")]
        BusinessEntites.Admin.MasterStateDTO Admin_MasterStateGetOnStateId(int stateId);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IMasterState/Admin_MasterStateGetOnStateId", ReplyAction="http://tempuri.org/IMasterState/Admin_MasterStateGetOnStateIdResponse")]
        System.Threading.Tasks.Task<BusinessEntites.Admin.MasterStateDTO> Admin_MasterStateGetOnStateIdAsync(int stateId);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IMasterState/Admin_MasterStateGetOnCountryId", ReplyAction="http://tempuri.org/IMasterState/Admin_MasterStateGetOnCountryIdResponse")]
        System.Collections.Generic.List<BusinessEntites.Admin.MasterStateDTO> Admin_MasterStateGetOnCountryId(int countryId);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IMasterState/Admin_MasterStateGetOnCountryId", ReplyAction="http://tempuri.org/IMasterState/Admin_MasterStateGetOnCountryIdResponse")]
        System.Threading.Tasks.Task<System.Collections.Generic.List<BusinessEntites.Admin.MasterStateDTO>> Admin_MasterStateGetOnCountryIdAsync(int countryId);
    }
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    public interface IMasterStateChannel : PlanGoGoAdmin.MasterState.IMasterState, System.ServiceModel.IClientChannel {
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    public partial class MasterStateClient : System.ServiceModel.ClientBase<PlanGoGoAdmin.MasterState.IMasterState>, PlanGoGoAdmin.MasterState.IMasterState {
        
        public MasterStateClient() {
        }
        
        public MasterStateClient(string endpointConfigurationName) : 
                base(endpointConfigurationName) {
        }
        
        public MasterStateClient(string endpointConfigurationName, string remoteAddress) : 
                base(endpointConfigurationName, remoteAddress) {
        }
        
        public MasterStateClient(string endpointConfigurationName, System.ServiceModel.EndpointAddress remoteAddress) : 
                base(endpointConfigurationName, remoteAddress) {
        }
        
        public MasterStateClient(System.ServiceModel.Channels.Binding binding, System.ServiceModel.EndpointAddress remoteAddress) : 
                base(binding, remoteAddress) {
        }
        
        public void Admin_MasterStateUpdate(BusinessEntites.Admin.MasterStateDTO masterStateDTO) {
            base.Channel.Admin_MasterStateUpdate(masterStateDTO);
        }
        
        public System.Threading.Tasks.Task Admin_MasterStateUpdateAsync(BusinessEntites.Admin.MasterStateDTO masterStateDTO) {
            return base.Channel.Admin_MasterStateUpdateAsync(masterStateDTO);
        }
        
        public System.Collections.Generic.List<BusinessEntites.Admin.MasterStateDTO> Admin_MasterStateGet() {
            return base.Channel.Admin_MasterStateGet();
        }
        
        public System.Threading.Tasks.Task<System.Collections.Generic.List<BusinessEntites.Admin.MasterStateDTO>> Admin_MasterStateGetAsync() {
            return base.Channel.Admin_MasterStateGetAsync();
        }
        
        public System.Collections.Generic.List<BusinessEntites.Admin.MasterStateDTO> Admin_MasterStateCheckExists(BusinessEntites.Admin.MasterStateDTO masterStateDTO) {
            return base.Channel.Admin_MasterStateCheckExists(masterStateDTO);
        }
        
        public System.Threading.Tasks.Task<System.Collections.Generic.List<BusinessEntites.Admin.MasterStateDTO>> Admin_MasterStateCheckExistsAsync(BusinessEntites.Admin.MasterStateDTO masterStateDTO) {
            return base.Channel.Admin_MasterStateCheckExistsAsync(masterStateDTO);
        }
        
        public BusinessEntites.Admin.MasterStateDTO Admin_MasterStateGetOnStateId(int stateId) {
            return base.Channel.Admin_MasterStateGetOnStateId(stateId);
        }
        
        public System.Threading.Tasks.Task<BusinessEntites.Admin.MasterStateDTO> Admin_MasterStateGetOnStateIdAsync(int stateId) {
            return base.Channel.Admin_MasterStateGetOnStateIdAsync(stateId);
        }
        
        public System.Collections.Generic.List<BusinessEntites.Admin.MasterStateDTO> Admin_MasterStateGetOnCountryId(int countryId) {
            return base.Channel.Admin_MasterStateGetOnCountryId(countryId);
        }
        
        public System.Threading.Tasks.Task<System.Collections.Generic.List<BusinessEntites.Admin.MasterStateDTO>> Admin_MasterStateGetOnCountryIdAsync(int countryId) {
            return base.Channel.Admin_MasterStateGetOnCountryIdAsync(countryId);
        }
    }
}
