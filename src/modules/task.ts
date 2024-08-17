import { Course } from './course';
import { courseManager } from './courseManager';
import { Item } from './item';

export class Task extends Item{
    private constructor(title: string, dueDate: string, status: string, courseId: string, id: string | undefined = undefined) {
        super(title, id);
        super.setProperty("dueDate", dueDate);
        super.setProperty("status", status);
        super.setProperty("courseId", courseId);
    }

    public static create(title: string, dueDate: string): Task {
        return new Task(title, dueDate, "Incomplete", '');
    }

    public getName(): string { return this.getTitle(); }

    public getDueDate(): string { return super.getProperty("dueDate"); }
    public setDueDate(dueDate: string): void { super.setProperty("dueDate", dueDate); }

    public getStatus(): string { return super.getProperty("status"); }
    public toggle(): void { super.setProperty("status", this.getStatus() === "Complete" ? "Incomplete" : "Complete"); }
    
    public getCourse(): Course | undefined { return courseManager.getFromIndex(super.getProperty("courseId")); }
    public setCourse(course: Course): void { super.setProperty("courseId", course.getId()); }
    public setCourseId(courseId: string): void { super.setProperty("courseId", courseId); }
    public removeCourse(): void { super.setProperty("courseId", ''); }

    public static deserialize(data: any): Task {
        return new Task(data.title, data.properties[0][1], data.properties[1][1], data.properties[2][1], data.id);
    }
}