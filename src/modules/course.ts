import { v4 as uid } from 'uuid';
import { Task } from './task';

export class Course {
    private id: string;
    private title: string;
    private code: string;
    private tasks: Task[];

    private constructor(id: string = uid(), title: string, code: string, tasks: Task[] = []) {
        this.id = id;
        this.title = title;
        this.code = code;
        this.tasks = tasks;
    }

    public static createCourse(title: string, code: string): Course {
        return new Course(undefined, title, code, undefined);
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

    public static serialize(course: Course): any {
        return {
            id: course.id,
            title: course.title,
            code: course.code,
            tasks: course.tasks
        };
    }

    public static deserialize(data: any): Course {
        return new Course(data.id, data.title, data.code, data.tasks);
    }
}