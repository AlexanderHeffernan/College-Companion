export class Manager<T> {
    private items: T[] = [];
    private storageKey: string;
    private itemFactory: (data: any) => T;
    private serializeItem: (item: T) => any;

    protected constructor(storageKey: string, itemFactory: (data: any) => T, serializeItem: (item: T) => any) {
        this.storageKey = storageKey;
        this.itemFactory = itemFactory;
        this.serializeItem = serializeItem;
        this.loadFromLocalStorage();
    }

    public static createInstance<T>(storageKey: string, itemFactory: (data: any) => T, serializeItem: (item: T) => any): Manager<T> {
        return new Manager<T>(storageKey, itemFactory, serializeItem);
    }

    public add(item: T): T {
        this.items.push(item);
        this.saveToLocalStorage();
        return item;
    }

    public getAll(): T[] { return this.items as T[]; }
    public update(): void { this.saveToLocalStorage(); }



    private saveToLocalStorage(): void {
        const serializedItems = JSON.stringify(this.items.map(item => this.serializeItem(item)));
        localStorage.setItem(this.storageKey, serializedItems);
    }

    private loadFromLocalStorage(): void {
        const serializedItems = localStorage.getItem(this.storageKey);
        if (serializedItems) {
            try {
                const data = JSON.parse(serializedItems);
                this.items = data.map((itemData: any) => this.itemFactory(itemData));
            } catch (error) {
                console.error('Failed to parse items from localStorage', error);
                this.items = [];
            }
        }
    }
}