import {TasksListScreen} from "./screens/TasksListScreen";
import {TasksViewOneScreen} from "./screens/TasksViewOneScreen";
import {TasksCreateScreen} from "./screens/TasksCreateScreen";
import {TasksEditScreen} from "./screens/TasksEditScreen";

export default [
    {
        component: TasksListScreen,
        path: '/',
        exact: true
    },
    {
        component: TasksViewOneScreen,
        path: '/view/:id',
        exact: true
    },
    {
        component: TasksCreateScreen,
        path: '/add',
        exact: true
    },
    {
        component: TasksEditScreen,
        path: '/edit/:id',
        exact: true
    },
];