import axios from "axios";

import { app_configuration } from '../../configuration';

const API_URL = app_configuration.API_URL;

class ExpeditionService {
    API_KEY = 'eJLxI5oEvp7afbJ45uzmk7nLtgBOLD9UdU0qwmix'

    async loadImages(rover, sol, camera) {
        try {
            const response = await axios.get(`${API_URL}/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&camera=${camera}&api_key=${this.API_KEY}`);

            return response.data;
        } catch (e) {
            alert(JSON.stringify(e.response.data, null, 2))
            // return e.response.data;
        }
    }
}

export const expeditionService = new ExpeditionService();
