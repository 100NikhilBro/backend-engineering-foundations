package Interview_Pov.Inheritence;

// Inhertience -> when one class inherit the property/methods of other class then inheritence happen

// Parent/Super Class -> jis se inherit hota hai 
// Child/Sub Class -> jo inherit hot hai 

// Inhertience -> "Reusability" + "is-a relationship"

// Eg1 -> Dog is-a Animal 
// Eg2 -> Car is-a Vehicle

// In java , we used the "extends" keyword for inheritence

// Memory ki baate in Inheritence
// Objects heaps mein bnte hai and parent + child dono ek hi object mein hote hai 
// refrence stack men hota hai

public class basic {

    public class Animal {
        String name;

        void eat() {
            System.out.println("Animal can eat");
        }
    }

    public class Dog extends Animal {
        void bark() {
            System.out.println("I bark also");
        }
    }

    public void main(String[] args) {
        Dog d1 = new Dog();
        d1.bark();
        d1.eat();
    }

}
