import { sophiaHttpColection } from "../../APIService/index.ts";

export default {
    projectSpecificTasks : (params: any): Promise<any> => {

        return new Promise<any>(async (resolve, reject) => {
            try {
                const { data, status } =  await sophiaHttpColection.getbyparams('project/gettasks',params);
                resolve({ data, status });
            } catch (error) {
                reject(error);
            }
        });
    }
    ,
    getEmployeeInfo : (params : any) : Promise<any> => {
        return new Promise<any>(async (resolve, reject) => {
            try {
                const { data, status } =  await sophiaHttpColection.getbyparams('dashboard/getuser',params);
                resolve({ data, status });
            } catch (error) {
                reject(error);
            }
        });
    }
}