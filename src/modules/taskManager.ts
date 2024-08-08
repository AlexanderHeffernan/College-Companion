import { Task } from './task';
import { ref } from 'vue';

class TaskManager {
    private static instance: TaskManager;
    private tasks = ref<Task[]>([]);

    private constructor() {}

    // Method to get the single instance of TaskManager
    public static getInstance(): TaskManager {
        if (!TaskManager.instance) { TaskManager.instance = new TaskManager(); }
        return TaskManager.instance;
    }

    public addTask(task: Task): void {
        this.tasks.value.push(task);
    }

    public getTasks(): Task[] {
        return this.tasks.value as Task[];
    }

    public findTaskById(id: string): Task | undefined {
        return this.tasks.value.find(task => task.getId() === id) as Task;
    }
}

export const taskManager: TaskManager = TaskManager.getInstance();