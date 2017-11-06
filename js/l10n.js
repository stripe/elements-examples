// Simple localization
document.querySelectorAll('footer a').forEach(function(lang) {
  const value = lang.getAttribute('data-lang');
  const prefix = window.location.hostname === 'stripe.github.io' ? '/elements-examples/' : '/';
  const final = value === 'en' ? prefix : (prefix + value + '/');
  const isCurrent = final === window.location.pathname;
  if (isCurrent) {
    lang.className += ' selected';
  } else {
    lang.setAttribute('href', final);
  }
});
