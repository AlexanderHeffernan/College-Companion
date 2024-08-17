import { ref } from 'vue';
import { Task } from './task';
import { Manager } from './manager';

class TaskManager extends Manager<Task> {
    constructor() { super('tasks', Task.deserialize, Task.serialize); }

    public sortAndFilter(sortFunction: (a: Task, b: Task) => number, filterFunctions: Array<(task: Task) => boolean>): Task[] {
        return this.getAll()
                   .filter(task => filterFunctions.every(filterFunc => filterFunc(task)))
                   .sort(sortFunction);
    }
}

const taskManagerRef = ref(new TaskManager());
export const taskManager = taskManagerRef.value;