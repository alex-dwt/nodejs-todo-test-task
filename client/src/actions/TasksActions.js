import {
    getOneTask,
    getTasksList,
} from "../services/ApiService";
import {store} from "../App";
import {
    TASKS_ACTION_CURRENT_TASK_LOADING_FINISHED,
    TASKS_ACTION_TASKS_LIST_LOADING_FINISHED,
} from "../reducers/TasksReducer";

export async function TasksListPageOpened() {
    const payload = await getTasksList();

    store.dispatch({
        type: TASKS_ACTION_TASKS_LIST_LOADING_FINISHED,
        payload,
    });
}

export async function TasksViewOnePageOpened(id) {
    store.dispatch({
        type: TASKS_ACTION_CURRENT_TASK_LOADING_FINISHED,
        payload: null,
    });

    const payload = await getOneTask(id);

    store.dispatch({
        type: TASKS_ACTION_CURRENT_TASK_LOADING_FINISHED,
        payload,
    });
}