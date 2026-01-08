package this_super;

// ImmutableClass - woh hoti hai jinka object kabi change na ho 

public class immutableClass {

    class User {

        private final String name;
        private final int age;

        User(String name, int age) {
            this.name = name;
            this.age = age;
        }

        String getName() {
            return this.name;
        }

        int getAge() {
            return this.age;
        }

    }

}
