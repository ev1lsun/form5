this.payment = function () {
    var payments = new cp.CloudPayments({
    language: "ru-RU",
    email: "",
    applePaySupport: false,
    googlePaySupport: false,
    yandexPaySupport: true,
    tinkoffInstallmentSupport: true,
});

    var data = { //данные дарителя
        name: $('#name_field').val(),
        text: $('#name_field').val(),
        phone: $('#phone_field').val()
    };

    var auto = $('#check').is(':checked'); //проверка

    if (auto) { //включаем подписку
        data.CloudPayments = {
            recurrent: { interval: 'Month', period: 1 } //один раз в месяц начиная со следующего месяца
        }
    }


    var accountId = $('#email-field').val();

    payments.pay("charge", { // options
        publicId: 'pk_3964da3d612302cfbf41b94414ec6', //id из личного кабинета
        description: 'Пожертвование в фонд тестов', //назначение
        amount: 100, //сумма
        currency: 'RUB', //валюта
        accountId: accountId, //идентификатор плательщика (обязательно для создания подписки)
        email: accountId,
        data: data
    },
    function (options) { // success
        //действие при успешной оплате
    },
    function (reason, options) { // fail
        //действие при неуспешной оплате
    });
};
   
$('#payment').click(payment);


