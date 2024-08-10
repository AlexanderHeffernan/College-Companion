export class Manager<T> {
    private items: T[] = [];

    private constructor() {}

    public static createInstance<T>(): Manager<T> {
        return new Manager<T>();
    }

    public add(item: T): T {
        this.items.push(item);
        return item;
    }

    public getAll(): T[] {
        return this.items as T[];
    }
}