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
  const researchPopup = document.getElementById('phomer-research-popup');
  if (researchPopup && typeof researchPopup.showModal === 'function') {
    const closePopup = () => {
      researchPopup.close();
      try { sessionStorage.setItem('phomer-research-popup-dismissed', '1'); } catch (_) {}
    };
    researchPopup.querySelectorAll('[data-close-research]').forEach(btn => btn.addEventListener('click', closePopup));
    researchPopup.querySelectorAll('.popup-choice').forEach(link => link.addEventListener('click', closePopup));
    researchPopup.addEventListener('cancel', event => { event.preventDefault(); closePopup(); });
    researchPopup.addEventListener('click', event => { if (event.target === researchPopup) closePopup(); });
    let alreadyDismissed = false;
    try { alreadyDismissed = sessionStorage.getItem('phomer-research-popup-dismissed') === '1'; } catch (_) {}
    if (!alreadyDismissed) researchPopup.showModal();
  }
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
