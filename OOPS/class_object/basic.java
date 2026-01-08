// Class -> blueprint / template   
// jo apne ko data(variables) and behaviour(methods) ke baare mein btatati hai 

// Object -> real implementaion of classes 
// -> it took memory(heap)
// -> real data rakhta hai and methods ko call krta hai 

// Object -> heap mein bnta hai ref stack mein hota hai 

// object is not exist without class but class is exist without object 

package class_object;

public class basic {

    static class Student {
        String name;
        int age;
        int rollNumber;
        String branch;

        Student(String name, int age, int rollNumber, String branch) {
            this.name = name;
            this.age = age;
            this.rollNumber = rollNumber;
            this.branch = branch;
        }

        void PrintBasicDetails() {
            System.out.println(this.name + "\n" + this.age + "\n" + this.branch + "\n" + this.rollNumber);
        }

    }

    static Student createStudent(String name, int age, int rollNumber, String branch) {
        Student s = new Student(name, age, rollNumber, branch);
        return s;
    }

    public static void main(String[] args) {
        Student s1 = createStudent("Raju", 22, 1234565432, "CSE");
        s1.PrintBasicDetails();
    }

}
