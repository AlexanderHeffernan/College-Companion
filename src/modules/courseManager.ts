import { Course } from './course';
import { Manager } from './manager';

export const courseManager: Manager<Course> = Manager.createInstance<Course>();