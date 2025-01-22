import { LineItem } from "./LineItem";

class ShoppingCart {
    private lineItems: LineItem[] = []
    private created: string

    constructor(created: string) {
        this.created = created;
    }

    public getCreated(): string {
        return this.created
    }

    public setCreated(create: string): void {
        this.created = create
    }

    public toString(): string {
        return `ShoppingCart | [Created: ${this.created} LineItem: ${this.lineItems}, [Account]]`
    }
    public getLineItems(): LineItem[] {
        return this.lineItems
    }
    public setLineItems(lineItems: LineItem): void {
        this.lineItems.push(lineItems)
    }
}

export { ShoppingCart }