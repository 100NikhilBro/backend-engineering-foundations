// Currently

class UserManagementService{

    validatingUserInput(){

    }

    creatingUsers(){

    }


    updatingUsers(){

    }

    sendingNotifications(){

    }

    writingAuditLogs(){

    }

}


// SRP - Single Responsibility Principle - class has only one reason to change


class UserValidations{

    validateInput(){

    }

}

class UserOperations{

    creatUser(){

    }

    updateUser(){

    }
}

class NotificationService{

    sendEmail(){

    }
}

class SystemLogs{
    auditSystem(){

    }
}
