import axios, { AxiosError } from "axios";

export const post = async (baseUrl: string, apiEndPoint: string, params: any) => {
    const response = await axios.create({ baseURL: baseUrl
    }).post<any>(apiEndPoint, params);

    return response;
}