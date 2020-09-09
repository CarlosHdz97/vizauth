import {local} from '../boot/axios'
export default {
    async login(credentials){
        const resp = await local.get('/account/dataToCreate')
        return resp.data;
    }
}