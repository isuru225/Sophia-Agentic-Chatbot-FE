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
}