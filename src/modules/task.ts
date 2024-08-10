import { v4 as uid } from 'uuid';
import { Course } from './course';

export class Task {
    private id: string;
    private title: string;
    private dueDate: string;
    private status: string;
    private course: Course | null;

    private constructor(title: string, dueDate: string, status: string, course: Course | null) {
        this.id = uid();
        this.title = title;
        this.dueDate = dueDate;
        this.status = status;
        this.course = course;
    }

    public static createQuickTask(title: string): Task {
        return new Task(title, '', 'Incomplete', null);
    }

    public static create(title: string, dueDate: string): Task {
        return new Task(title, dueDate, "Incomplete", null);
    }

    public getId(): string { return this.id; }
    public getTitle(): string { return this.title; }
    public setTitle(title: string): void { this.title = title; }

    public getDueDate(): string { return this.dueDate; }
    public setDueDate(dueDate: string): void { this.dueDate = dueDate; }

    public getStatus(): string { return this.status; }
    
    public getCourse(): Course | null { return this.course; }
    public setCourse(course: Course): void { this.course = course; }
    
    public toggle(): void { 
        this.status = this.status === "Complete" ? "Incomplete" : "Complete"; 
    }
}