import { Course } from './course';
import { ref } from 'vue';

class CourseManager {
    private static instance: CourseManager;
    private courses = ref<Course[]>([]);

    private constructor() {}

    // Method to get the single instance of TaskManager
    public static getInstance(): CourseManager {
        if (!CourseManager.instance) { CourseManager.instance = new CourseManager(); }
        return CourseManager.instance;
    }

    public addCourse(course: Course): Course {
        this.courses.value.push(course);
        return course;
    }

    public getCourses(): Course[] {
        return this.courses.value as Course[];
    }
}

export const courseManager: CourseManager = CourseManager.getInstance();