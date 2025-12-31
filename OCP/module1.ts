// Without OCP

class NotificationService {
    sendEmail(user, message) {
        // send email
    }

    sendSMS(user, message) {
        // send SMS
    }
}



// With OCP

interface INotification {
    send(user, message): void;
}

class EmailNotification implements INotification {
    send(user, message) {
        // send email
    }
}

class SMSNotification implements INotification {
    send(user, message) {
        // send SMS
    }
}

// New Add krna hai like Whatsapp

class WhatsAppNotification implements INotification{
    send(user: any, message: any): void {
        
    }
}


class NotificationProcessor {
    constructor(private notifier: INotification) {}

    notify(user, message) {
        this.notifier.send(user, message);
    }
}




// Steps to implement ocp

// Identify responsibilities / things that can change in future

// Example: Notification type, file format, payment gateway

// Create an interface for that behavior

// Example: INotification, IFormat, IPaymentProcessor

// Implement concrete classes for each variant

// Example: EmailNotification, SMSNotification, WhatsAppNotification

// Create a processor / orchestrator class

// Example: NotificationProcessor, FormatProcessor

// Responsibility: use the interface without caring about concrete implementation