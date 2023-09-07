function pay() {
 var payments = new cp.CloudPayments({
    language: "ru-RU",
    email: "",
    applePaySupport: true,
    googlePaySupport: true,
    yandexPaySupport: true,
    tinkoffInstallmentSupport: true,
});


payments.pay("charge", {
    publicId: "test_api_00000000000000000000002",
    description: "Тестовая оплата",
    amount: 100,
    currency: "RUB",
    invoiceId: "123",
    accountId: "123",
    email: "",
    skin: "classic",
    requireEmail: false,
}).then(function(widgetResult) {
    console.log('result', widgetResult);
}).catch(function(error) {
    console.log('error', error);
})}

$('#check-btn').click(pay);


