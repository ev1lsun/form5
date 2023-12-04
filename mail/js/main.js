this.paySample4 = function () {
    var widget = new cp.CloudPayments();

   var amount = parseFloat($('#amount-field').val());
   var accountId = $('#email-field').val();
   
   var receipt = {
    Items: [//товарные позиции
         {
            label: 'Название товара', //наименование товара
            price: amount, //цена
            quantity: 1, //количество
            amount: amount, //сумма
            vat: null, //ставка НДС
            method: 1, // тег-1214 признак способа расчета - признак способа расчета
            object: 0,
            AgentSign: 0,
    }
    ],
    taxationSystem: 2, //система налогообложения; необязательный, если у вас одна система налогообложения
    email: 'denisberez@gmail.com', //e-mail покупателя, если нужно отправить письмо с чеком
    phone: '79187774422', //телефон покупателя в любом формате, если нужно отправить сообщение со ссылкой на чек
    isBso: false, //чек является бланком строгой отчетности
    amounts:
    {
        electronic: amount, // Сумма оплаты электронными деньгами
        advancePayment: 0.00, // Сумма из предоплаты (зачетом аванса) (2 знака после точки)
        credit: 0.00, // Сумма постоплатой(в кредит) (2 знака после точки)
        provision: 0.00 // Сумма оплаты встречным предоставлением (сертификаты, др. мат.ценности) (2 знака после точки)
    }
}; 

var auto = $('#check').is(':checked'); //проверка

var data = {
    name: $('#name_field').val(),
    textarea: $('#textarea_field').val(),
    phone: $('#phone_field').val(),
};

if (auto) { data.CloudPayments = {
    CustomerReceipt: receipt, //чек для первого платежа
    recurrent: {
     interval: 'Month',
     period: 1, //чек для регулярных платежей
     }
    }
     }
 
     else  {
     data.CloudPayments = {
         CustomerReceipt: receipt
    }
    
  };

    widget.charge({ // options
        publicId: 'pk_27d390d79b145a07a419b00f0c619', //id из личного кабинета
        description: 'Пожертвование в фонд ...', //назначение
        amount: amount,
        invoiceId: '370', //сумма
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

$('#check-btn').click(paySample4);
