// Lightweight website interactions; no analytics, cookies, or data collection.
(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.nav-links');
  if (menuButton && menu) {
    menuButton.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    });
    menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      menu.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open navigation');
    }));
  }
  // The overlay is visible in the HTML from first paint; JS only manages dismissal.
  const researchPopup = document.getElementById('phomer-research-popup');
  if (researchPopup) {
    const closePopup = () => { researchPopup.hidden = true; document.body.classList.remove('research-popup-open'); };
    document.body.classList.add('research-popup-open');
    researchPopup.querySelectorAll('[data-close-research]').forEach(button => button.addEventListener('click', closePopup));
    researchPopup.querySelectorAll('.popup-choice').forEach(link => link.addEventListener('click', closePopup));
    researchPopup.addEventListener('click', event => { if (event.target === researchPopup) closePopup(); });
    document.addEventListener('keydown', event => { if (event.key === 'Escape' && !researchPopup.hidden) closePopup(); });
    const firstButton = researchPopup.querySelector('[data-close-research]');
    if (firstButton) firstButton.focus({ preventScroll: true });
  }
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
