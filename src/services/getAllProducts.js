import axios from "axios"

const BASE_URL = "https://api.escuelajs.co/api/v1/";

export const getAllProduct = async () => {
    try{
        const response = await axios.get(BASE_URL+"products") ;
        console.log(response.data);
        return response.data;
    }
    catch(error){
        console.log(error)
        return error;
    }
}