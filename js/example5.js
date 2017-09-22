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
  var paymentRequest = stripe.paymentRequest({
    country: 'US',
    currency: 'usd',
    total: {
      amount: 2500,
      label: 'Total',
    },
  });
  paymentRequest.on('token', function(result) {
    var example = document.querySelector('.example5');
    example.querySelector('.token').innerText = result.token.id;
    example.classList.add('submitted');
    result.complete('success');
  });

  var paymentRequestElement = elements.create('paymentRequestButton', {
    paymentRequest: paymentRequest,
    style: {
      paymentRequestButton: {
        theme: 'light',
      },
    },
  });

  paymentRequest.canMakePayment().then(function(result) {
    if (result) {
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
