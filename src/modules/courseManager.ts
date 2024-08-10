import { Course } from './course';
import { Manager } from './manager';

class CourseManager extends Manager<Course> {
    constructor() {
        super('courses', Course.deserialize, Course.serialize);
    }

    public getFromIndex(index: string): Course | undefined {
        return this.getAll().find(course => course.getId() === index);
    }
}

export const courseManager = new CourseManager();