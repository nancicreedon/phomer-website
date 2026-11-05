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
  // Show the survey invitation immediately on each fresh homepage load.
  const researchPopup = document.getElementById('phomer-research-popup');
  if (researchPopup) {
    const closePopup = () => {
      if (researchPopup.open) researchPopup.close();
    };
    researchPopup.querySelectorAll('[data-close-research]').forEach(button => button.addEventListener('click', closePopup));
    researchPopup.querySelectorAll('.popup-choice').forEach(link => link.addEventListener('click', closePopup));
    researchPopup.addEventListener('cancel', event => { event.preventDefault(); closePopup(); });
    researchPopup.addEventListener('click', event => { if (event.target === researchPopup) closePopup(); });
    if (typeof researchPopup.showModal === 'function') {
      researchPopup.showModal();
    } else {
      researchPopup.setAttribute('open', '');
    }
  }
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
