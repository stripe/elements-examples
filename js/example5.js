(function() {
  'use strict';

  var elements = stripe.elements();

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

  registerElements([card], 'example5');
})();
