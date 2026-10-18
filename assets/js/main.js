function shorten(s, n) {
  s = s.replace(/\s+/g, ' ').trim();
  return s.length > n ? s.slice(0, n - 1) + '…' : s;
}

function paperTitle(el) {
  var paper = el.closest('.paper');
  return paper ? shorten(paper.querySelector('.paper-title').firstChild.textContent, 500) : '';
}

// Visitor statistics (Umami, see _config.yml). Every link that leaves the site is tagged, and
// Umami's own click handler counts the click before following it. Event names are capped at
// 50 characters by Umami, so the full text, address and paper go along as event properties.
document.querySelectorAll('a[href]').forEach(function (a) {
  if (a.hostname === location.hostname) return;
  var text = shorten(a.textContent, 500);
  var title = paperTitle(a);
  a.setAttribute('data-umami-event', shorten(title ? text + ' · ' + title : text, 50));
  a.setAttribute('data-umami-event-tekst', text);
  a.setAttribute('data-umami-event-url', a.href);
  if (title) a.setAttribute('data-umami-event-paper', title);
});

document.addEventListener('click', function (e) {
  var btn = e.target.closest('.abstract-btn');
  if (!btn) return;
  var abstract = btn.closest('.paper-title').nextElementSibling;
  var isOpen = btn.getAttribute('aria-expanded') === 'true';
  btn.setAttribute('aria-expanded', String(!isOpen));
  btn.textContent = isOpen ? '+' : '−';
  abstract.hidden = isOpen;
  if (!isOpen && window.umami) {
    var title = paperTitle(btn);
    umami.track(shorten('Sammendrag · ' + title, 50), { paper: title });
  }
});
