interface Repository{
    save():void;
}

interface Service{
    save():void;
}

class UserController{

    //  Dependency Injection - constructor use krenge 

    constructor(private service:Service){

    }

    save(){
        this.service.save();
    }



}


class UserService{

    //  Dependency Injection - constructor use krenge 

    constructor(private repository:Repository){}

    save(){
        this.repository.save();
    }
}


class UserPostgresRepository implements Repository{
    save(){
        console.log('save user in the postgres db');
    }
}


class UserMongoRepository implements Repository{
    save(): void {
        console.log('save user in the mongo db');
    }
}


class FakeUserRepository implements Repository{
    save(): void {
        console.log('save user in fake Db');
    }
}


class ModernUserService implements Service{
    constructor(private repository:Repository){}
    save(): void {
        this.repository.save();
    }
}

// const postgresRepository = new UserPostgresRepository();
// const mongoRepository = new UserMongoRepository();
const fakeRepository = new FakeUserRepository();
// const userService = new UserService(fakeRepository);

const moderService = new ModernUserService(fakeRepository);
const userController = new UserController(moderService);



userController.save();