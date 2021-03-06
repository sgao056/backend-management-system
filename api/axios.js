import axios from 'axios'
import config from '../config/index'

const baseUrl = process.env.NODE_ENV === 'developement' ? config.baseUrl.dev : config.baseUrl.pro

class HttpRequest {
    constructor(){
        this.baseUrl = baseUrl
    }

    getInsideConfig(){
        const config = {
            baseUrl: this.baseUrl,
            header:{}
        }
        return config
    }
    interceptors(instance){
        instance.interceptors.request.use(
            function(config){
                return config
            }
            ,function(error){
                return Promise.reject(error)
            }
        );
        instance.interceptors.response.use(
            function(response){
                return response
            }
            ,function(error){
                return Promise.reject(error)
            }
        )
    }
    request(options){
        const instance = axios.create()
        options = {...this.getInsideConfig(),...options}
        this.interceptors(instance)
        return instance(options)
    }
}

export default new HttpRequest(baseUrl)