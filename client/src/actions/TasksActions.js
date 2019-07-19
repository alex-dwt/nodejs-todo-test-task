import {
    completeTaskRequest,
    getOneTaskRequest,
    getTasksListRequest,
} from "../services/ApiService";
import {store} from "../index";
import {
    TASKS_ACTION_CURRENT_TASK_LOADING_FINISHED,
    TASKS_ACTION_TASKS_LIST_LOADING_FINISHED,
} from "../reducers/TasksReducer";

export async function tasksViewListTasksAction() {
    store.dispatch({
        type: TASKS_ACTION_TASKS_LIST_LOADING_FINISHED,
        payload: [],
    });

    const payload = await getTasksListRequest();

    store.dispatch({
        type: TASKS_ACTION_TASKS_LIST_LOADING_FINISHED,
        payload,
    });
}

export async function tasksViewOneTaskAction(id) {
    store.dispatch({
        type: TASKS_ACTION_CURRENT_TASK_LOADING_FINISHED,
        payload: null,
    });

    const payload = await getOneTaskRequest(id);

    store.dispatch({
        type: TASKS_ACTION_CURRENT_TASK_LOADING_FINISHED,
        payload,
    });
}

export async function completeTaskAction(id) {
    const payload = await completeTaskRequest(id);

    if (payload) {
        store.dispatch({
            type: TASKS_ACTION_CURRENT_TASK_LOADING_FINISHED,
            payload,
        });
    }
}