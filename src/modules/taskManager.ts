import { ref } from 'vue';
import { Task } from './task';
import { Manager } from './manager';

const taskManagerRef = ref(Manager.createInstance<Task>(
    'tasks',
    Task.deserialize,
    Task.serialize
));

export const taskManager = taskManagerRef.value;