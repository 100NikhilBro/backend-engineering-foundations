export class Product{
    id:string;
    name:string;
    price:number;

    constructor(id:string,name:string,price:number){
        this.id = id;
        this.name = name;
        this.price = price;
    }
}


export class Order{
    products:Product[]=[];

    addProduct(product:Product){
        return this.products.push(product);
    }

    getProduct(){
        return this.products;
    }

    removeProduct(productId:string){
        const filteredProducts = this.products.filter((p)=>{
            return p.id != productId;
        })

        return filteredProducts;
    }


    // Sigle Responsibilty Principle ke hisab se yeh yahan nhi rahega 

    // calculatePricing(){
    //     const price = this.products.reduce((acc,crr)=>{
    //         return crr.price+acc;
    //     },0)
    // }


    // Sigle Responsibilty Principle ke hisab se yeh yahan nhi rahgeha
    
    // generateInvoice(){
    //     console.log(`
    //         Invoice Date:${new Date().toDateString()}

    //         ----------------------------------

    //         Prduct Name\tPrice
            
    //         `);

    //         this.products.forEach((product)=>{
    //             console.log((`${product.name}\t\t${product.name}`))
    //         })

    //         console.log('------------------------');

    //         console.log(`Total : ${this.calculatePricing()}`);

    // }


    // Signle Responsibilty principle ke hisab se yeh yahan nhi rehen chaiye 

    // processPayment(){
    //     console.log('Processing payment');
    //     console.log('Paymenst processed successfully')
    //     console.log('Added to accounting system');
    //     console.log(`Email sent to customer`);
    // } 


}