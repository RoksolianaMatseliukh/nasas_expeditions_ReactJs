import axios from "axios";

import { app_configuration } from '../../configuration';

const API_URL = app_configuration.API_URL;
const API_KEY = app_configuration.API_KEY;

class MarsExpeditionService {

    async loadImages(rover, sol, camera, page) {
        console.log(`${API_URL}/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&camera=${camera}&page=${page}&api_key=${API_KEY}`)
        const response = await axios.get(`${API_URL}/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&camera=${camera}&page=${page}&api_key=${API_KEY}`);
        return response.data;
    };
}

export const expeditionService = new MarsExpeditionService();
