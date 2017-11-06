// Simple localization
document.querySelectorAll('footer a').forEach(function(langNode) {
  const langValue = langNode.getAttribute('data-lang');

  const urlPrefix = window.location.hostname === 'stripe.github.io' ? '/elements-examples/' : '/';
  const langUrl = langValue === 'en' ? urlPrefix : (urlPrefix + langValue + '/');

  if (langUrl === window.location.pathname) {
    langNode.className += ' selected';
  } else {
    langNode.setAttribute('href', langUrl);
  }
});
