import Service from '../services/Services';

const resource = 'posts';

export default {
    get(){
        return Service.get(resource)
    }
}