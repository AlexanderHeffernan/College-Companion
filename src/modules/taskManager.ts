import { Task } from './task';
import { Manager } from './manager';

export const taskManager: Manager<Task> = Manager.createInstance<Task>();