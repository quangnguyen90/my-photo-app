import axiosClient from './axiosClient';

const productApi = {
    getAll: (params) => {
        const url = '/products';
        return axiosClient.get(url, { 
            params,
            headers: {
                'uid' : 'user123456'
            }
        });
    },

    get: (id) => {
        const url = `/product/${id}`;
        return axiosClient.get(url);
    },
}

export default productApi;