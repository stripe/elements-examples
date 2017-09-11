(function() {
  'use strict';

  var elements = stripe.elements({
    cssSrc: 'https://rsms.me/interface/interface.css',
  });

  var card = elements.create('card', {
    style: {
      base: {
        color: '#32325D',
        fontWeight: 500,
        fontFamily: 'Interface, Open Sans, Segoe UI, sans-serif',
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

  registerElements([card], 'example4');
})();
