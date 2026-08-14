document.querySelectorAll('.year').forEach(function (el) { el.textContent = new Date().getFullYear(); });

var toggle = document.querySelector('.nav-toggle');
var menu = document.getElementById('menu');
if (toggle) {
  toggle.addEventListener('click', function () {
    var open = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', String(!open));
    menu.classList.toggle('open');
  });
}
menu.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function () {
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});