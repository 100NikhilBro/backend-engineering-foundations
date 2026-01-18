package Interview_Pov.Polymorphism;

// Runtime Polymprphism 

// Parent reference 
// child object
// Method call - runtime pr decide hoga - oBject decide krega 

public class poly2 {

    class Animal {
        void sound() {
            System.out.println("Animal make sound");
        }
    }

    class Dog extends Animal {
        @Override
        void sound() {
            System.out.println("Dog breaks");
        }
    }

    public void main(String[] args) {
        Animal a = new Dog(); // Parent ko ref | child ko object
        a.sound(); // dog breaks print hoga
    }

}

class Animal {
    void sound() {
        System.out.println("Animals make sound");
    }
}

class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Dogs bark");
    }
}
