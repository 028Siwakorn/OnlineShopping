import { OrderStatus } from "./OrderStatus"
import { LineItem } from "./LineItem";
export class Order {
    private number: number;
    private ordered: string;
    private shipped: string;
    private ship_to: string;
    private status: OrderStatus;
    private total = 0;
    private lineItems: LineItem[] = [];
    constructor(number: number, ordered: string, shipped: string, ship_to: string,) {
        this.number = number;
        this.ordered = ordered;
        this.shipped = shipped
        this.ship_to = ship_to
        this.status = OrderStatus
    }
    public getNumber(): number {
        return this.number
    }
    public getOrderedDate(): string {
        return this.ordered;
    }
    public setOrderedDate(ordered: string): void {
        this.ordered = ordered
    }
    public getShippedDate(): string {
        return this.shipped
    }
    public setShippedDate(shipped: string): void {
        this.shipped = shipped
    }
    public getShipToAddress(): string {
        return this.ship_to
    }
    public setShipToAddress(ship_to: string): void {
        this.ship_to = ship_to
    }
    public getStatus(): OrderStatus {
        return this.status
    }
    public setStatus(status: OrderStatus): void {
        this.status = status
    }
    public getTotal(): number {
        return this.total
    }
    public setTotal(total: number): void {
        this.total = total
    }
    public calculateTotal(): number {
        let totalPrice = 0;
        for (let i = 0; i < this.lineItems.length; i++) {
            totalPrice += this.lineItems[i].getPrice() * this.lineItems[i].getQuantity();
        }
        return totalPrice;
    }
    public toString(): string {
        return `Order [Number = ${this.number}, Ordered = ${this.ordered}, Shipped = ${this.shipped}, ShipToAddress = ${this.ship_to}, Status = ${this.status}, Total = ${this.total}]`
    }
}