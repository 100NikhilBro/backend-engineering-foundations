<!-- Composition -->

1. It is a Strong 'has-a' relationship
2. child ki lifecylce parent pr depend krti hai 
3. parent gya to child bhi gya 


# Composition - Ownership Relationship

# Eg

class Engine {
    Engine() {
        System.out.println("Engine created");
    }
}

class Car {

    private Engine engine;

    Car() {
        this.engine = new Engine();
    }
}




# backend Eg

class Database {
    void connect() {}
}

class OrderService {

    private final Database db = new Database();

    void createOrder() {
        db.connect();
    }
}




# Note - Prefer composition over inheritance

