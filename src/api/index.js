import axios from "axios"


export async function http(url, method='get', data={}) {
    const baseURL = 'http://pruebasclaro.movilbox.net:81/desarrollo/test_mbox/public/api/';
    const options = {
        baseURL,
        method,
        url,
        data
    }
    const response = await axios(options)
    return response;
}