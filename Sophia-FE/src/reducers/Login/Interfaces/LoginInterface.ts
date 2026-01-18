export interface ILogin {
    isLoginSuccessfull : boolean,
    tokenInfo : object,
    isLoading : boolean,
    errorCode : number,
    user : {
        data : object,
        isLoading : boolean
    }
}