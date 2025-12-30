class BaseUser{
    getRole(){
        console.log('user Role')
    }
}


class User extends BaseUser{

    getAccessLevel(){
        console.log('User access level');
    }

    getRole(){
        console.log('User role');
    }

}


class Admin extends User{
    getAccessLevel(){
        console.log('Admin access level')
    }

    getRole(){
        console.log('Admin role');
    }
}


class Manager extends User{
    getAccessLevel(): void {
        console.log('Manager Access Level')
    }

    getRole(): void {
        console.log('Manager Role')
    }


}


class Customer extends BaseUser{
    getRole(): void {
        console.log('Customer Role')
    }
}



function getUserAccessLevel(user:User){
    user.getAccessLevel();
}


getUserAccessLevel(new User());
getUserAccessLevel(new Admin());
getUserAccessLevel(new Manager());
getUserAccessLevel(new Customer());


