import Service from '../services/Services';

const resource = 'todos';

export default {
    get(){
        return Service.get(resource);
    }
}

