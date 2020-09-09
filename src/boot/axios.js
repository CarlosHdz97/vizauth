import axios from 'axios'
export const local = axios.create({
    baseURL: 'http://192.168.1.24:8074/vizapi/public',
    header: {
        'Authorization': null
    }
});
export default async ({Vue})=>{
    Vue.prototype.$axios = local
}
