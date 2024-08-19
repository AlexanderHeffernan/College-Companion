import { Task } from './task';

export class TaskSorter {
    static sort(tasks: Task[], sortingOption: string) : Task[] {
        switch (sortingOption) {
            case 'date':
                return tasks.sort((a, b) => a.getDueDate().localeCompare(b.getDueDate()));
            case 'alphabetical':
                return tasks.sort((a, b) => a.getName().localeCompare(b.getName()));
            default:
                return tasks;
        }
    }
}