document.addEventListener('click', function (e) {
  var btn = e.target.closest('.abstract-btn');
  if (!btn) return;
  var abstract = btn.closest('.paper-title').nextElementSibling;
  var isOpen = btn.getAttribute('aria-expanded') === 'true';
  btn.setAttribute('aria-expanded', String(!isOpen));
  btn.textContent = isOpen ? '+' : '−';
  abstract.hidden = isOpen;
});
