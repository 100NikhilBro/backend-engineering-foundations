package Interview_Pov.InterfaceVsAbtract;

// Java mein multiple inheritence hota hai using interfaces not classes

public class MultipleInhertence {

    interface A {
        void show();
    }

    interface B {
        void show();
    }

    class C implements A, B {
        public void show() {
            System.out.println("Resolved");
        }
    }

}
