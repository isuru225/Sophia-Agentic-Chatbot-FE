import { sophiaHttpColection } from "../../APIService/index.ts";

export default {
    getAllConversationList : (params: any): Promise<any> => {

        return new Promise<any>(async (resolve, reject) => {
            try {
                const { data, status } =  await sophiaHttpColection.getbyparams('api/conversationlist',params);
                resolve({ data, status });
            } catch (error) {
                reject(error);
            }
        });
    }
}