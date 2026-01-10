import { sophiaHttpColection } from "../../APIService/index.ts";

export default {
    getAllChatMessages : (params: any): Promise<any> => {

        return new Promise<any>(async (resolve, reject) => {
            try {
                const { data, status } =  await sophiaHttpColection.getbyparams('api/chat/getmessages',params);
                resolve({ data, status });
            } catch (error) {
                reject(error);
            }
        });
    }
    ,
    getUserQueryResponse : (params: any): Promise<any> => {

        return new Promise<any>(async (resolve, reject) => {
            try {
                const { data, status } =  await sophiaHttpColection.post('api/chat',params);
                resolve({ data, status });
            } catch (error) {
                reject(error);
            }
        });
    }
}