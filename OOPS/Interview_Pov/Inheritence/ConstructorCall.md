class A {
    A() {
        System.out.println("A constructor");
    }
}

class B extends A {
    B() {
        System.out.println("B constructor");
    }
}


<!-- Output -->

A constructor
B constructor


=============================


# Note -> Child ka constructor call hone se pehle parent ka construtor call hoga because parent ke bina child exist nhi krta 



