package Interview_Pov.InterfaceVsAbtract;

public class interF {

    interface PaymentService {
        void Pay(int amount);
    }

    class UPIPayment implements PaymentService {
        public void Pay(int amount) {
            System.out.println("Paid " + amount + " via UPI");
        }
    }

    public void main(String[] args) {
        PaymentService p = new UPIPayment();
        p.Pay(500);

    }

}
