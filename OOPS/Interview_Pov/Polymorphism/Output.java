package Interview_Pov.Polymorphism;

// variable refrence se access hota hai onject se nhi 
// so belwo qn ka output = 10

public class Output {
    class A {
        int x = 10;
    }

    class B extends A {
        int x = 20;
    }

    public void main(String[] args) {
        A obj = new B();
        System.out.println(obj.x);
    }

}
