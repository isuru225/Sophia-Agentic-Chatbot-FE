import { sophiaHttpColection } from "../../APIService/index.ts";

export default {
    setUserQuery : (params: any): Promise<any> => {

        return new Promise<any>(async (resolve, reject) => {
            try {
                const { data, status } =  await sophiaHttpColection.get('home/setquery');
                resolve({ data, status });
            } catch (error) {
                reject(error);
            }
        });
    }
    ,
    getUserLoginInfo : (params: any): Promise<any> => {

        return new Promise<any>(async (resolve, reject) => {
            try {
                const { data, status } =  await sophiaHttpColection.get('api/logininfo');
                resolve({ data, status });
            } catch (error) {
                reject(error);
            }
        });
    }
    ,
    setConversationIdentifier : (params: any): Promise<any> => {

        return new Promise<any>(async (resolve, reject) => {
            try {
                const { data, status } =  await sophiaHttpColection.post('api/conversationinfo',params);
                resolve({ data, status });
            } catch (error) {
                reject(error);
            }
        });
    }
}