import config from "../config";
const { post } = require("./ApiService")

export const SaveNewUser = async (user: any) => {
    return await post(config.baseUrl, config.endPoint.addNewUser, user);
}

export const VerifyUser = async (user: any) => {
    return await post(config.baseUrl, config.endPoint.verifyUser, user);
}