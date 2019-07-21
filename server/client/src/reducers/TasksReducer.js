export const TASKS_ACTION_TASKS_LIST_LOADING_FINISHED = Symbol('TASKS_ACTION_TASKS_LIST_LOADING_FINISHED');
export const TASKS_ACTION_CURRENT_TASK_LOADING_FINISHED = Symbol('TASKS_ACTION_CURRENT_TASK_LOADING_FINISHED');

const reducer = (
    state = {
        tasksList: [],
        currentTask: null,
    },
    action
) => {
    switch (action.type) {
        case TASKS_ACTION_TASKS_LIST_LOADING_FINISHED:
        {
            return {
                ...state,
                tasksList: action.payload,
            };
        }

        case TASKS_ACTION_CURRENT_TASK_LOADING_FINISHED:
        {
            return {
                ...state,
                currentTask: action.payload,
            };
        }

        default:
            return state;
    }
};

export default reducer;