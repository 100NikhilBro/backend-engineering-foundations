// LSP -> liskov substition Principle 


class Bird{
    fly():void{
        console.log();
    }

    makeSound():void{
        console.log();
    }
}


class Sparrow extends Bird{

    // we override the Bird class method by the Sparrow class

    // like bird ka saprrow - fly ke sparrow se override
    fly(): void {
        console.log('sparrow fly');
    }

    // like bird ke makeSound ko sparrow ke make sound se override
    makeSound(): void {
        console.log('sparrow sound');
    }
    
}


class Penguin extends Bird{

    fly(): void {
        throw new Error('Penguin cant fly');    
    }

    makeSound(): void {
        console.log('Penguin make sound');    
    }
}



function makeBirdFly(bird:Bird){
    bird.fly();
}

makeBirdFly(new Bird()); // Parent - Work
makeBirdFly(new Sparrow()); // child - Work
makeBirdFly(new Penguin()); // child - Work


// As we know that 
// apn lsp bolta hai ki agr koi fn parent ke liye kaam kr rha hai to use child ke liye bhi kaam krna chaiye 
// fn bole to internal Fn of that parent class
// ab jaise yahan pr Parent - ke liye working hai but Penguin ke liye nhi so it breaks the lsp 
// leskov break kyu hua kyu ki - as per leskov if class pr kaam chal rha hai to subclass pr bhi kaam chale without braking the program 

// Violtaion se kaise bache - see in file - L_lsp.ts