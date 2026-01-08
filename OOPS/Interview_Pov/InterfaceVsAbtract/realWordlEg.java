package Interview_Pov.InterfaceVsAbtract;

public class realWordlEg {

    interface AuthService {
        boolean authenticate(String token);
    }

    class JWTAuthService implements AuthService {
        public boolean authenticate(String token) {
            return true;
        }
    }

    class OAuthService implements AuthService {
        public boolean authenticate(String token) {
            return true;
        }
    }

    public void main(String[] args) {

        AuthService auth = new JWTAuthService();
        auth.authenticate("myToken");
    }
}
