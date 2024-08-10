import { v4 as uid } from 'uuid';

export class Item {
    private id: string;
    private title: string;
    private properties: Map<string, any>;

    protected constructor(title: string, id: string = uid(), properties: Map<string, any> = new Map()) {
        this.id = id;
        this.title = title;
        this.properties = properties;
    }

    public getId(): string { return this.id; }
    public getTitle(): string { return this.title; }
    public setTitle(title: string): void { this.title = title; }
    public getProperty(key: string): any { return this.properties.get(key); }
    public setProperty(key: string, value: any): void { this.properties.set(key, value); }

    public static serialize(item: Item): any {
        return {
            id: item.id,
            title: item.title,
            properties: Array.from(item.properties.entries()) // Convert Map to array of key-value pairs
        };
    }
}