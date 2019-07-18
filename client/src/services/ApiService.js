import Axios from "axios";

const BASE_URL = 'http://localhost:8000/api';
const TASKS_URL = BASE_URL + '/tasks';

export async function getTasksList() {
    try {
        const result = await Axios.get(TASKS_URL);

        return result.data.items;
    }
    catch (e) {
        return [];
    }
}

export async function getOneTask(id) {
    try {
        const result = await Axios.get(`${TASKS_URL}/${id}`);

        return result.data;
    }
    catch (e) {
        return null;
    }
}