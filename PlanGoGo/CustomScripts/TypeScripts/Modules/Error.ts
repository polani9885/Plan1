export class Error {
    public logError(className:string,methodName: string, parameters: any,error:string) {
        console.log("Class Name:" +
            className +
            ", MethodName:" +
            methodName +
            ", Error:" +
            error +
            ",parameters:" +
            JSON.stringify(parameters) 
            );
    }
}