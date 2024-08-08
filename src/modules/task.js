export class Task {
    #id; #title; #dueDate; #priority; #status; #courseId;
    constructor(id, title, dueDate, priority, status, courseId) {
        this.#id = id;
        this.#title = title;
        this.#dueDate = dueDate;
        this.#priority = priority;
        this.#status = status;
        this.#courseId = courseId;
    }
}