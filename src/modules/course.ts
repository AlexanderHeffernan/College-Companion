import { Task } from './task';
import { Item } from './item';

export class Course extends Item {
    private constructor(title: string, code: string, tasks: Task[] = [], id: string | undefined = undefined) {
        super(title, id);
        super.setProperty("code", code);
        super.setProperty("tasks", tasks);
    }

    public static create(title: string, code: string): Course {
        return new Course(title, code, undefined);
    }

    public getCode(): string { return super.getProperty("code"); }
    public setCode(code: string): void { super.setProperty("code", code); }

    public getTasks(): string[] { return super.getProperty("tasks"); }
    public addTask(task: Task): void { 
        super.getProperty("tasks").push(task);
        task.setCourse(this);
    }

    public removeTask(task: Task): void {
        const tasks = super.getProperty("tasks") as Task[];
        const index = tasks.indexOf(task);

        if (index > -1) {
            tasks.splice(index, 1);
            task.removeCourse();
        } else {
            console.error("Task not found in the course.");
        }
    }

    public static deserialize(data: any): Course {
        return new Course(data.title, data.properties[0][1], data.properties[1][1], data.id);
    }
}