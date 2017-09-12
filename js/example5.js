(function() {
  'use strict';

  var elements = stripe.elements();

  /**
   * Card Element
   */
  var card = elements.create('card', {
    style: {
      iconStyle: 'solid',
      base: {
        iconColor: '#fff',
        color: '#fff',
        fontWeight: 400,
        fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
        fontSize: '15px',
        fontSmoothing: 'antialiased',

        '::placeholder': {
          color: '#BFAEF6',
        },
        ':-webkit-autofill': {
          color: '#fce883',
        },
      },
      invalid: {
        iconColor: '#FFC7EE',
        color: '#FFC7EE',
      },
    },
  });
  card.mount('#example5-card');

  /**
   * Payment Request Element
   */
  var paymentRequest = stripe._paymentRequestBeta({
    country: 'US',
    currency: 'USD',
    total: {
      amount: 2500,
      label: 'Total',
    },
  });
  var paymentRequestElement = elements.create('_paymentRequestBeta', {
    paymentRequest: paymentRequest,
    style: {
      _paymentRequestBeta: {
        theme: 'light',
      },
    },
  });

  paymentRequest.canMakePayment().then(function(result) {
    if (result.available) {
      document.querySelector('.example5 .card-only').style.display = 'none';
      document.querySelector(
        '.example5 .payment-request-available'
      ).style.display =
        'block';
      paymentRequestElement.mount('#example5-paymentRequest');
    }
  });

  registerElements([card], 'example5');
})();
