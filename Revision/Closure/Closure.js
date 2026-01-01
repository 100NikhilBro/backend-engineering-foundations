function SendEmail(senderMail) {

    const mail = senderMail.trim();

    return function ModifyEmailWithName(senderName) {

        const name = senderName.trim();
        const addMailToName = mail + name;

        return function ModifyEmailWithLastName(senderLastName) {

            const LastName = senderLastName.trim();
            const addLastName = addMailToName + LastName;

            return function ModifyEmailWithCarTDetails(senderCart) {
                console.log(`Your cart detail is here ${addLastName} ${senderCart}`)
            }

        }

    }

}


const res = SendEmail('babliji@gmail.com')('Babli')('Jiji')('CartID:123456543212345');