this.pay = function () {
 var widget = new cp.CloudPayments();
    widget.pay('charge', // или 'charge'
        { //options
            publicId: 'pk_3964da3d612302cfbf41b94414ec6', //id из личного кабинета
            description: 'Оплата товаров в example.com', //назначение
            amount: 100, //сумма
            currency: 'RUB', //валюта
            accountId: 'user@example.com', //идентификатор плательщика (необязательно)
            invoiceId: '1234567', //номер заказа  (необязательно)
            email: 'user@example.com', //email плательщика (необязательно)
            skin: "mini", //дизайн виджета (необязательно)
            autoClose: 3, //время в секундах до авто-закрытия виджета (необязательный)
            data: {
                myProp: 'myProp value'
            },
            configuration: {
                common: {
                    successRedirectUrl: "https://{ваш сайт}/success", // адреса для перенаправления 
                    failRedirectUrl: "https://{ваш сайт}/fail"        // при оплате по Tinkoff Pay
                }
            },
            payer: { 
                firstName: 'Тест',
                lastName: 'Тестов',
                middleName: 'Тестович',
                birth: '1955-02-24',
                address: 'тестовый проезд дом тест',
                street: 'Lenina',
                city: 'MO',
                country: 'RU',
                phone: '123',
                postcode: '345'
            }
        },
        {
            onSuccess: function (options) { // success
                //действие при успешной оплате
            },
            onFail: function (reason, options) { // fail
                //действие при неуспешной оплате
            },
            onComplete: function (paymentResult, options) { //Вызывается как только виджет получает от api.cloudpayments ответ с результатом транзакции.
                //например вызов вашей аналитики
            }
        }
    )
}

document.getElementById("payment").addEventListener("click", pay);


