import { ShoppingCart } from "./ShoppingCart"
import { Order } from "./Order"
import { Payment } from "./Payment"
export class Account {
    private orders: Order[] = []
    private payments: Payment[] = []
    private shoppingCarts: ShoppingCart
    private id: string
    private billing_address: string
    private is_closed: boolean
    private open: string
    private closed: string

    constructor(id: string, billing_address: string, is_closed: boolean, open: string, closed: string) {
        this.shoppingCarts = new ShoppingCart("Yo")
        this.id = id
        this.billing_address = billing_address
        this.is_closed = is_closed
        this.open = open
        this.closed = closed
    }
    public getId(): string {
        return this.id
    }
    public getBillingAddress(): string {
        return this.billing_address
    }
    public setBillingAddress(billing_address: string): void {
        this.billing_address = billing_address
    }
    public getIsClosed(): boolean {
        return this.is_closed
    }
    public setIsClosed(is_closed: boolean): void {
        this.is_closed = is_closed
    }
    public getOpen(): string {
        return this.open
    }
    public setOpen(open: string): void {
        this.open = open
    }
    public getClosed(): string {
        return this.closed
    }
    public setClosed(closed: string): void {
        this.closed = closed
    }
    public addPayment(payments: Payment): void {
        this.payments.push(payments)
    }
    public getPayments(): Payment[] {
        return this.payments
    }
    public addOrder(orders: Order): void {
        this.orders.push(orders)
    }
    public getOrders(): Order[] {
        return this.orders
    }
    public getShoppingCarts(): ShoppingCart {
        return this.shoppingCarts
    }
    public toString(): string {
        return `ID = ${this.id}, BillingAddress = ${this.billing_address}, IsClosed = ${this.is_closed}, Open = ${this.open}, Closed = ${this.closed}`
    }
}
