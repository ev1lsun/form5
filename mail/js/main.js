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
                vat: 20, //ставка НДС
                method: 1, // тег-1214 признак способа расчета - признак способа расчета
                object: 0,
                AgentSign: null,
            }
        ],
        taxationSystem: 2, //система налогообложения; необязательный, если у вас одна система налогообложения
        email: 'denisberez@gmail.com', //e-mail покупателя, если нужно отправить письмо с чеком
        phone: '79187774422', //телефон покупателя в любом формате, если нужно отправить сообщение со ссылкой на чек
        customerInfo: "Денис Иванов",
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
        comment: 'test'

    };

    if (auto) {
        data.CloudPayments = {
            CustomerReceipt: receipt,
            recurrent: {
                requireConfirmation: true,
                interval: 'Month',
                period: 1,
                amount: 100,
                accountId: 'denisberez@gmail.com',
                CustomerReceipt: receipt,
            }
        }
    }


    else {
        data.CloudPayments = {
            CustomerReceipt: receipt
        }

    };

    widget.auth({ // options
        publicId: 'pk_27d390d79b145a07a419b00f0c619', //id из личного кабинета
        description: 'Пожертвование в фонд ...', //назначение
        amount: amount,
        invoiceId: '370', //сумма
        currency: 'RUB', //валюта
        accountId: accountId, //идентификатор плательщика (обязательно для создания подписки)
        email: accountId,
        requireEmail: false,
        data: data,
        skin: "modern",
        autoClose: 3,
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
            onSuccess: function (options) {
                window.location.href = 'https://google.ru';
            },
            onFail: function (reason, options) {
                // fail
                // действие при неуспешной оплате
            },
            onComplete: function (paymentResult, options) {
                //  Вызывается как только виджет получает от api.cloudpayments ответ с результатом транзакции.
            },
        }
    );
};

$('#check-btn').click(paySample4);
