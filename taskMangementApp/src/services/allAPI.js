import SERVER_URL from "./serverUrl"
import commonAPI from "./commonAPI"

//registerAPI called by Auth
export const registerAPI = async (reqBody)=>{
    return await commonAPI("POST",`${SERVER_URL}/register`,reqBody)
}