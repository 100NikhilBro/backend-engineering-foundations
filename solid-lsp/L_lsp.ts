// Note -> Below
// We should make sure that 
// everything parent class does , child class also must have those abilities


// yeh woh class hai jisme saare methods honge jo saari subclass use krti hai 
// yeh jo base class hai imse woh 
// methd rakho jo sbme common hai like jo sb use kr rhi reh hai koi error throw nhi kr rha override chal jayega but error nhi 

class BaseBird{
    makes
}




class Bird extends BaseBird{
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



//  isko humne base bird se align kiya kyu ki yeh saare methods own nhi kr rhi 
//  kyuki yeh fly wale mein error throw kr rhi 

class Penguin extends BaseBird{

    // ab base birds mein koi bhi methids nhi hai fly to hum use hta skte hai 

    // fly(): void {
    //     throw new Error('Penguin cant fly');    
    // }

    makeSound(): void {
        console.log('Penguin make sound');    
    }
}



function makeBirdFly(bird:Bird){
    bird.fly();
}


// Real World Eg - Permission.ts