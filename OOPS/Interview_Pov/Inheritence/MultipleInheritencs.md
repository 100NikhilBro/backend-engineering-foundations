In Java , Multiple Inheritence is not allowed 

Multiple Inheritence ?

class A{}
class B{}

class C extends A,B {}  // - Java mein yeh allow nhi hai 

<!-- Why this is not allow - Diamond Problem -->

 --> agr dono parent mein same method ho to java confuse ho jata hai 
 --> safety ke liye java mein multiple inheritence nhi 

But , Inheritence is allowed


<!-- Diamond Problem -->

For Eg , we have four classes like A , B , C , D - this made a diamond like struture that is why it is called the diamond problem 

class A{

}

class B extends A{

}

class C extends A{

}

class D extends B , C{

}


