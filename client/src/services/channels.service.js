import axios from 'axios';

export default class ChannelsService {

    static async create(data) {
        try {
            const response = await axios.post('http://localhost:5000/channels', data);
            return response.data;
        } catch (e) {
            return e.response.data;
        }
    }
}