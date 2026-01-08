package this_super;

// this - current class ka object
// super - same class ka object

// this - apni class
// super - parent class

// apni kuch bhi cheeje acces krni ho to this 
// apne parent ki koi bhi chhej access krni ho to super

public class ts {

    class Parent {

        Parent() {
            System.out.println("ParentConstructor");
        };

        int x = 10;

        void greet() {
            System.out.println("Hello from Parent");
        }
    }

    class Child extends Parent {

        Child() {
            super(); // parent Construtor
            System.out.println("ChildConstructor");
        }

        int x = 20;

        void greet() {
            System.out.println("Hello from Child");
        }

        void show() {
            System.out.println(x); // 20
            System.out.println(this.x); // 20
            System.out.println(super.x); // 10
        }

        void call() {
            greet(); // apne ko hi
            this.greet(); // apne ko hi
            super.greet(); // parent
        }
    }

    public static void main(String[] args) {

    }

}
