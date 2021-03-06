import Axios from "axios";

const BASE_URL = '/api';
const TASKS_URL = BASE_URL + '/tasks';

export async function getTasksListRequest() {
    try {
        const result = await Axios.get(TASKS_URL);

        return result.data.items;
    }
    catch (e) {
        return [];
    }
}

export async function getOneTaskRequest(id) {
    try {
        const result = await Axios.get(`${TASKS_URL}/${id}`);

        return result.data;
    }
    catch (e) {
        return null;
    }
}

export async function completeTaskRequest(id) {
    try {
        const result = await Axios.put(`${TASKS_URL}/${id}/complete`);

        return result.data;
    }
    catch (e) {
        return null;
    }
}

export async function deleteTaskRequest(id) {
    try {
        await Axios.delete(`${TASKS_URL}/${id}`);

        return true;
    }
    catch (e) {
        return false;
    }
}

export async function createTaskRequest(label) {
    try {
        await Axios.post(TASKS_URL, {label});

        return true;
    }
    catch (e) {
        return null;
    }
}

export async function editTaskRequest(id, label) {
    try {
        await Axios.put(`${TASKS_URL}/${id}`, {label});

        return true;
    }
    catch (e) {
        return null;
    }
}