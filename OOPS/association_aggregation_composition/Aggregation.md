

<!-- Aggregation(Weak has-a relaationship) --> 

it is has-a but child-independent

--> isme has-a relationship hota hai 
--> but child object independent hota hai
--> parent ke khtm hone se child khtm nhi hoga 


class Engine {
    void start() {}
}

class Car {

    Engine engine;

    Car(Engine engine) {
        this.engine = engine;
    }
}





<!-- Backend POV -->

-> Team has a developer
-> Compnay has a employee
-> service has a logger
