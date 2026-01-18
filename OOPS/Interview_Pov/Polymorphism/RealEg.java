package Interview_Pov.Polymorphism;

public class RealEg {

    abstract class PaymentService {
        abstract void pay(int amount);
    }

    class UPIPayment extends PaymentService {
        void pay(int amount) {
            System.out.println("Paid via UPI");
        }
    }

    class CardPayment extends PaymentService {
        void pay(int amount) {
            System.out.println("Paid by card");
        }
    }

    public void main(String[] args) {

        PaymentService p = new UPIPayment();
        p.pay(500);
    }

}