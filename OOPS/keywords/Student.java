
class Student {

    static private int countObj = 0;
    String name;
    private int rollNum;
    String branch;
    final String schoolName = "DPS";

    Student(String name, int rollNum, String branch) {
        this.name = name;
        this.rollNum = rollNum;
        this.branch = branch;
        countObj++;
    }

    Student() {

    }

    int getRollNumber() {
        return this.rollNum;
    }

    void setRollNumber(int rollNum) {
        this.rollNum = rollNum;
    }

    static int getCount() {
        return countObj;
    }

}