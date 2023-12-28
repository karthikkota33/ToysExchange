import client from './client';

const endPoint = '/my';

const getListings = (email, password) => client.get(endPoint, {email, password});


export default {
    getListings
}