import config from '../config';

export default class LS {

   static get(field) {
        if(LS._isExsists()) {
            const data = JSON.parse(localStorage.getItem(config.localStorage.name));

            if(!field) return data;
            if (data[field]) return data[field];

            return undefined;
        }
   }

   static set(field, data = {}) {
        let dataToStorage = {};

        if(field){
            dataToStorage = LS.get();
            if(!dataToStorage) dataToStorage = {};
            dataToStorage[field] = data;
        } else{
            dataToStorage = data;
        }

       localStorage.setItem(config.localStorage.name, JSON.stringify(dataToStorage));

   }

   static _isExsists() {
        return !!localStorage.getItem(config.localStorage.name);
   }
}
