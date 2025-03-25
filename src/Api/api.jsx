/* Configure the base URL of the API */
import axios from "axios";

const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

/* Configure Axios instance */
const api = axios.create({
	baseURL: VITE_API_BASE_URL, // url api
});

export default api;
