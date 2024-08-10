import { v4 as uid } from 'uuid';
import { Course } from './course';
import { courseManager } from './courseManager';

export class Task {
    private id: string;
    private title: string;
    private dueDate: string;
    private status: string;
    private courseId: string;

    private constructor(id: string = uid(), title: string, dueDate: string, status: string, courseId: string) {
        this.id = id;
        this.title = title;
        this.dueDate = dueDate;
        this.status = status;
        this.courseId = courseId;
    }

    public static createQuickTask(title: string): Task {
        return new Task(undefined, title, '', 'Incomplete', '');
    }

    public static create(title: string, dueDate: string): Task {
        return new Task(undefined, title, dueDate, "Incomplete", '');
    }

    public getId(): string { return this.id; }
    public getTitle(): string { return this.title; }
    public setTitle(title: string): void { this.title = title; }

    public getDueDate(): string { return this.dueDate; }
    public setDueDate(dueDate: string): void { this.dueDate = dueDate; }

    public getStatus(): string { return this.status; }
    
    public getCourse(): Course | undefined { return courseManager.getFromIndex(this.courseId); }
    public setCourse(course: Course): void { this.courseId = course.getId(); }
    
    public toggle(): void { 
        this.status = this.status === "Complete" ? "Incomplete" : "Complete"; 
    }

    public static serialize(task: Task): any {
        return {
            id: task.id,
            title: task.title,
            dueDate: task.dueDate,
            status: task.status,
            courseId: task.courseId
        };
    }

    public static deserialize(data: any): Task {
        return new Task(data.id, data.title, data.dueDate, data.status, data.courseId);
    }
}