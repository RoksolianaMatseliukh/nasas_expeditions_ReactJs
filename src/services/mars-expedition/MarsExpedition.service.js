import axios from "axios";

import { app_configuration } from '../../configuration';

const API_URL = app_configuration.API_URL;
const API_KEY = app_configuration.API_KEY;

class MarsExpeditionService {

    async loadImages(rover, sol, camera) {
        try {
            const response = await axios.get(`${API_URL}/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&camera=${camera}&api_key=${API_KEY}`);

            return response.data;
        } catch (e) {
            alert(JSON.stringify(e.response.data.error.message, null, 2));
        }
    }
}

export const expeditionService = new MarsExpeditionService();
