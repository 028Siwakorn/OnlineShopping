import { Account } from './Account';
import { WebUser } from './WebUser';
class Customer {
    private account: Account
    private webuser: WebUser
    private id: string
    private address: string
    private phone: string
    private email: string

    constructor(account: Account, webuser: WebUser, id: string, address: string, phone: string, email: string) {
        this.account = account
        this.webuser = webuser
        this.id = id
        this.address = address
        this.phone = phone
        this.email = email
    }
    public getID(): string {
        return this.id
    }
    public getAddress(): string {
        return this.address
    }
    public setAddress(address: string): void {
        this.address = address
    }
    public getPhone(): string {
        return this.phone
    }
    public setPhone(Phone: string): void {
        this.phone
    }
    public toString(): string {
        return `Customer ID: ${this.id}, Address: ${this.address}, Phone: ${this.phone}, Email: ${this.email}, ${this.webuser}, Account: ${this.account.toString()}`;
    }
}
export { Customer }