import { Task } from './task';

export class TaskFilter {
    static filterByStatus(tasks: Task[], status: string) : Task[] {
        return tasks.filter(task => task.getStatus() === status);
    }
    static filterByCourse(tasks: Task[], courseFilter: string) : Task[] {
        if (courseFilter === 'all') { return tasks; }
        return tasks.filter(task => task.getCourse()?.getId() === courseFilter);
    }
}