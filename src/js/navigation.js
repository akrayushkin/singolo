class Navigation {
  constructor(element, anchors) {
    this.nav = document.querySelector(element);
    this.sections = document.querySelectorAll(anchors);
    this.init();
  }

  init() {
    this.navlinks = this.nav.querySelectorAll('.main-nav__link');
    this.actions();
  }

  _getMarginTopHeight() {
    return document.querySelector('.page-header').getBoundingClientRect().height;
  }

  _getCurrentPosition() {
    return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
  }

  _getPageHeight() {
    let scrollHeight = Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
    );
    return scrollHeight - document.documentElement.clientHeight;
  }

  _getCoords(elem) {
    let box = elem.getBoundingClientRect();
    return {
      pageTop: box.top + pageYOffset,
      top: box.top,
      height: box.height
    };
  }

  _removeLinkActivity() {
    this.navlinks.forEach((a) => {
      a.classList.remove('main-nav__link--current');
    })
  }

  _addLinkActivity(item) {
    this.navlinks.forEach((a) => {
      a.classList.remove('main-nav__link--current');
      if (item.getAttribute('id') === a.getAttribute('href').substring((1))) {
        a.classList.add('main-nav__link--current');
      }
    })
  }

  onScroll(margin) {
    const currentPosition = this._getCurrentPosition();
    const pageHeight = this._getPageHeight();
    const marginTop = margin;
    if (currentPosition < marginTop) {
      this._removeLinkActivity();
      this.navlinks[0].classList.add('main-nav__link--current');
      return null;
    }
    if (currentPosition === pageHeight) {
      this._removeLinkActivity();
      this.navlinks[this.navlinks.length - 1].classList.add('main-nav__link--current');
      return null;
    }
    this.sections.forEach((item) => {
      const elem = this._getCoords(item);
      if(elem.pageTop - marginTop <= currentPosition && elem.top <= marginTop + 5 && elem.top >= 0) {
        this._addLinkActivity(item);
      }
    })
  }

  actions() {
    this.sections.forEach((item) => {
      const elem = this._getCoords(item);
      const marginTopHeight = this._getMarginTopHeight();
      if(elem.pageTop - marginTopHeight <= this._getCurrentPosition() && elem.top <= marginTopHeight) {
        this._addLinkActivity(item);
      }
    })
    this.nav.addEventListener('click', (evt) => {
      const target = evt.target;
      if (target.closest('.main-nav__link')) {
        this._removeLinkActivity();
        target.closest('.main-nav__link').classList.add('main-nav__link--current');
      }
    })
    document.addEventListener('scroll', () => {
      const marginTopHeight = this._getMarginTopHeight();
      this.sections.forEach((item) => {
        item.style.borderTopWidth = `${marginTopHeight}px`;
        item.style.marginTop = `-${marginTopHeight}px`;
      })
      this.onScroll(marginTopHeight);
    });

  }
}

export default Navigation;
