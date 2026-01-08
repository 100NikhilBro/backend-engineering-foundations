package Interview_Pov.Polymorphism;

// Polymorphism - same thing multiple behaviour

// same method name -> d/f behaviour -> Object decide kreag ki kon sa behaviour chalega 

// Polymorphism - one interface and many implemtaion

// Polymorphism generally two type - Compile Time Polymorphism(methodOverloading) | Run-time Polymorphism(MethodOverriding)

// Compile Time Polymorphism - methodOverloading
// same method name but d/f paramemtrs in same class
// decision compile time pr hota hai  

public class poly {

    // In Logger class , we have many methods here compiler pehle hi decide kr leta
    // hai
    // kise call krna hai

    class Logger {
        void log(String msg) {
            System.out.println(msg);
        }

        void log(String msg, int code) {
            System.out.println(msg + "|" + code);
        }

        void log(Exception e) {
            System.out.println(e.getMessage());
        }
    }

}
