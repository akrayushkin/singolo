class Navigation {
  constructor(element) {
    this.nav = document.querySelector(element);
    this.actions();
  }

  actions() {
    this.nav.addEventListener('click', (evt) => {
      const target = evt.target;
      if (target.closest('.main-nav__link')) {
        this.nav.querySelectorAll('.main-nav__link').forEach(item => {
          item.classList.remove('main-nav__link--current');
        });
        target.closest('.main-nav__link').classList.add('main-nav__link--current');
      }
    })
  }
}

export default Navigation;
