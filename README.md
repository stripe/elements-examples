# Stripe Elements examples

[See them in action!](https://stripe.github.io/elements-examples)

This repository contains examples of stylish forms that use Stripe Elements. These examples illustrate how to handle errors in real-time and style focus states, error states, and placeholders.

## Need help with Elements?

- Get started with Stripe Elements by [reading our quickstart guide](https://stripe.com/docs/stripe-js).
- For help with Elements and your Stripe integration in general, please [contact Stripe Support](https://support.stripe.com/).


# In this repo

Common code for handling errors and form submission lives [here](js/index.js).

## Example 1

- [JavaScript](js/example1.js)
- [CSS](css/example1.css)

Example 1 shows a form that uses the `card` Element, a custom web font, and a solid icon with a custom color.

## Example 2

- [JavaScript](js/example2.js)
- [CSS](css/example2.css)

Example 2 shows a "floaty-label" form that uses individual `cardNumber`, `cardExpiry`, and `cardCvc` Elements with a custom web font.

The form also collects address (and thus postal code) outside of the payment form. It passes the postal code to Stripe on tokenization.

## Example 3

- [JavaScript](js/example3.js)
- [CSS](css/example3.css)

Example 3 shows a form that uses individual `cardNumber`, `cardExpiry`, and `cardCvc` Elements with a custom web font.

The form also collects postal code outside of the payment form.

## Example 4

- [JavaScript](js/example4.js)
- [CSS](css/example4.css)

Example 4 shows a form that uses the `paymentRequestButton` Element to provide
Apple Pay / Payment Request API support, as well as a `card` Element with a
custom web font.

## Example 5

- [JavaScript](js/example5.js)
- [CSS](css/example5.css)

Example 5 shows a form that uses the `paymentRequestButton` Element to provide
Apple Pay / Payment Request API support, as well as a `card` Element with a
custom icon color.
