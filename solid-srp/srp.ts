// single responsibilty

import { Order, Product } from "./Order";

const product1 = new Product('1','Laptop',100); 
const product2 = new Product('2','Watch',60);

const order = new Order();

order.addProduct(product1);
order.addProduct(product2);



