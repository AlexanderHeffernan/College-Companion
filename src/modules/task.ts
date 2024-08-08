import { v4 as uid } from 'uuid';

export class Task {
    private id: string;
    private title: string;
    private dueDate: string;
    private status: string;
    private courseId: number;

    private constructor(title: string, dueDate: string, status: string, courseId: number) {
        this.id = uid();
        this.title = title;
        this.dueDate = dueDate;
        this.status = status;
        this.courseId = courseId;
    }

    public static createQuickTask(title: string): Task {
        return new Task(title, '', 'Incomplete', -1);
    }

    public static create(title: string, dueDate: string, status: string, courseId: number): Task {
        return new Task(title, dueDate, status, courseId);
    }

    public getId(): string { return this.id; }
    public getTitle(): string { return this.title; }
    public getDueDate(): string { return this.dueDate; }
    public getStatus(): string { return this.status; }
    public getCourseId(): number { return this.courseId; }
    
    public toggle(): void { 
        this.status = this.status === "Complete" ? "Incomplete" : "Complete"; 
    }
}