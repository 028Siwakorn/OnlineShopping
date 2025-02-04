import { WebUser } from "./WebUser";
import { UserState } from "./UserState";
import { Customer } from "./Customer";
import { Product } from "./Product";
import { Order } from "./Order";
import { LineItem } from "./LineItem";
console.log("############## USER ############");
const user1 = new WebUser("028", "123456");
console.log(user1.toString());

console.log("############## CUSTOMER ############");
const customer1 = new Customer(user1, "C033", "Mars", "084-5701272", "Tane2545@webmail.npru.ac.th");
console.log(customer1.toString());

console.log("############## PRODUCT ############");
const product1 = new Product("P001", "Lays", "Lays Co.th");
console.log(product1.toString());

console.log("############## LINEITEM ############");
const lineitem1 = new LineItem(product1, 100, 50);
console.log(lineitem1.toString());
