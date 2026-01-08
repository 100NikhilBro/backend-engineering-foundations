
public class basic {
    public static void main(String[] args) {

        Student s1 = new Student("Raju", 123456, "CSE");
        // System.out.println(Student.countObj);
        // s1.setRollNumber(345678908);
        // System.out.println(s1.getRollNumber());
        Student s2 = new Student("fg", 4567, "CSE");
        // System.out.println(Student.countObj);
        Student s3 = new Student("fg", 8998, "CSE");
        System.out.println(Student.getCount());

    }
}
