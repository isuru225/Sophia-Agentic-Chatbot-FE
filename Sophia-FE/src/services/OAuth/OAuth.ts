import { sophiaHttpColection } from "../../APIService/index.ts";

export default {
    getAuthURL : (params: any): Promise<any> => {

        return new Promise<any>(async (resolve, reject) => {
            try {
                const { data, status } =  await sophiaHttpColection.get('api/auth/google/login');
                resolve({ data, status });
            } catch (error) {
                reject(error);
            }
        });
    }
    ,
    setAuthCode : (params: any): Promise<any> => {

        return new Promise<any>(async (resolve, reject) => {
            try {
                const { data, status } =  await sophiaHttpColection.getbyparams('api/auth/google/callback',params);
                resolve({ data, status });
            } catch (error) {
                reject(error);
            }
        });
    }
}