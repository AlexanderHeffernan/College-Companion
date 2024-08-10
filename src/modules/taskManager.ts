import { Task } from './task';
import { Manager } from './manager';

export const taskManager = Manager.createInstance<Task>(
    'tasks',
    Task.deserialize,
    Task.serialize
);