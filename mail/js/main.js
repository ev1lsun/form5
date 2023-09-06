this.payment = function () {
    var widget = new cp.CloudPayments();

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

    var amount = parseFloat($('#amount-sample-4').val());
    var accountId = $('#email-field').val();

    widget.charge({ // options
        publicId: 'pk_3964da3d612302cfbf41b94414ec6', //id из личного кабинета
        description: 'Пожертвование в фонд тестов', //назначение
        amount: 1, //сумма
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
