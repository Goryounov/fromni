import axios from 'axios';

export default class ProfilesService {

    static async create(data) {
        try {
            const response = await axios.post('http://localhost:5000/profiles', data);
            return response.data;
        } catch (e) {
            return e.response.data;
        }
    }

    static async getAll() {
        try {
            const response = await axios.get('http://localhost:5000/profiles');
            return response.data;
        } catch (e) {
            return e.response.data;
        }
    }
}