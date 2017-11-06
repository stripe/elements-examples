// Simple localization
const isGithubPages = window.location.hostname === 'stripe.github.io';
const localeIndex = isGithubPages ? 2 : 1;
window.__exampleLocale = window.location.pathname.split('/')[localeIndex] || 'en';

document.querySelectorAll('.optionList a').forEach(function(langNode) {
  const langValue = langNode.getAttribute('data-lang');

  const urlPrefix = isGithubPages ? '/elements-examples/' : '/';
  const langUrl = langValue === 'en' ? urlPrefix : (urlPrefix + langValue);

  if (langUrl === window.location.pathname || langUrl === window.location.pathname + '/') {
    langNode.className += ' selected';
  } else {
    langNode.setAttribute('href', langUrl);
  }
});
