(function() {
  'use strict';

  var elements = stripe.elements({
    cssSrc: 'https://rsms.me/inter/inter-ui.css',
  });

  /**
   * Card Element
   */
  var card = elements.create('card', {
    style: {
      base: {
        color: '#32325D',
        fontWeight: 500,
        fontFamily: 'Inter UI, Open Sans, Segoe UI, sans-serif',
        fontSize: '15px',
        fontSmoothing: 'antialiased',

        '::placeholder': {
          color: '#CFD7DF',
        },
      },
      invalid: {
        color: '#E25950',
      },
    },
  });

  card.mount('#example4-card');

  /**
   * Payment Request Element
   */
  var paymentRequest = stripe.paymentRequest({
    country: 'US',
    currency: 'usd',
    total: {
      amount: 2000,
      label: 'Total',
    },
  });
  paymentRequest.on('token', function(result) {
    var example = document.querySelector('.example4');
    example.querySelector('.token').innerText = result.token.id;
    example.classList.add('submitted');
    result.complete('success');
  });

  var paymentRequestElement = elements.create('paymentRequestButton', {
    paymentRequest: paymentRequest,
    style: {
      paymentRequestButton: {
        type: 'donate',
      },
    },
  });

  paymentRequest.canMakePayment().then(function(result) {
    if (result) {
      document.querySelector('.example4 .card-only').style.display = 'none';
      document.querySelector(
        '.example4 .payment-request-available'
      ).style.display =
        'block';
      paymentRequestElement.mount('#example4-paymentRequest');
    }
  });

  registerElements([card, paymentRequestElement], 'example4');
})();
