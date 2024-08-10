import { v4 as uid } from 'uuid';
import { Task } from './task';

export class Course {
    private id: string;
    private title: string;
    private code: string;
    private tasks: Task[];

    private constructor(title: string, code: string) {
        this.id = uid();
        this.title = title;
        this.code = code;
        this.tasks = [];
    }

    public static createCourse(title: string, code: string): Course {
        return new Course(title, code);
    }

    public getId(): string { return this.id; }

    public getTitle(): string { return this.title; }
    public setTitle(title: string): void { this.title = title; }

    public getCode(): string { return this.code; }
    public setCode(code: string): void { this.code = code; }

    public getTasks(): Task[] { return this.tasks; }
    public addTask(task: Task): void { 
        this.tasks.push(task);
        task.setCourse(this);
    }
    public removeTask(taskId: string): void { 
        this.tasks = this.tasks.filter(task => task.getId() !== taskId);
    }
}