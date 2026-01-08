package Interview_Pov.Abstraction;

// Abstraction
// -> Implementation details hide krna 
// -> Required functionality show krna 
// -> LooseCoupling + Clean Architecture

// Abstract class
// -> abstract keyword se bnti hai
// -> abstract+non-abstract dono methods ho skte hai 
// -> Object directly create nhi kr skta

// Abstract Method
// -> method without body
// -> child ko enforce krte hai implementaion ke liye

// Abstraction vs Encapsulation
// Abstarction - What we have to show and what we have to hidel
// Encapsulation - data ko protect krna 

public class abs {

    abstract class Vehicle {

        abstract void start(); // abstract method

        void fuel() { // normal(non-abstrcat) method
            System.out.println("Vehicle needs fuels");
        }
    }

    class Car extends Vehicle {
        @Override
        void start() {
            System.out.println("car strts with keys");
        }
    }

    public void main(String[] args) {
        Vehicle v = new Car();
        v.start();
        v.fuel();
    }

}
