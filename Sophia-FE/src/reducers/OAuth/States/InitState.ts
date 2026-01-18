import { IOAuth } from "../Interfaces/OAuthInterface.ts";

export const OAuthInitState : IOAuth  = {
    authURL : {
        data : "",
        isLoading : false
    }
    ,
    authCode : {
        data : "",
        isLoading : false
    }
}

