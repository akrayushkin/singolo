class Slider {
  constructor(element) {
    this.slider = document.querySelector(element);
    this.init();
  }

  init() {
    this.slides = this.slider.querySelectorAll('.slider__item');
    this.phones = this.slider.querySelectorAll('.slider__img-box');
    this.previous = this.slider.querySelector('.slider__arrow-left');
    this.next = this.slider.querySelector('.slider__arrow-right');
    this.actions();
  }

  _findCurrentSlide(elements) {
    for (let i = 0; i < elements.length; i++) {
      if (!elements[i].classList.contains('visually-hidden')) {
        return i;
      }
    }
    return null;
  }

  _changeBackgroundColor() {
    this.slider.classList.toggle('slider--color-main');
    this.slider.classList.toggle('slider--color-add');
  }

  slipLeft() {
    const i = this._findCurrentSlide(this.slides);
    const j = i - 1 < 0 ? this.slides.length - 1 : i - 1;
    this.slides[i].classList.add('slip-center-left');
    this.slides[j].classList.add('slip-right-center');
    this.slides[j].classList.remove('visually-hidden');
    this._changeBackgroundColor();
    setTimeout(() => {
      this.slides[i].classList.add('visually-hidden');
      this.slides[i].classList.remove('slip-center-left');
      this.slides[j].classList.remove('slip-right-center');
    }, 450);
  }

  slipRight() {
    const i = this._findCurrentSlide(this.slides);
    const j = i + 1 === this.slides.length ? 0 : i + 1;
    this.slides[i].classList.add('slip-center-right');
    this.slides[j].classList.add('slip-left-center');
    this.slides[j].classList.remove('visually-hidden');
    this._changeBackgroundColor();
    setTimeout(() => {
      this.slides[i].classList.remove('slip-center-right');
      this.slides[i].classList.add('visually-hidden');
      this.slides[j].classList.remove('slip-left-center');
    }, 450);
  }

  actions() {
    const left = this.slipLeft.bind(this);
    const right = this.slipRight.bind(this);
    let possible = true;
    const debounce = delayedFunction => {
      delayedFunction();
      setTimeout(() => {
        possible = true;
      }, 450);
    };
    this.previous.addEventListener('click', () => {
      if (possible) debounce(left);
      possible = false;
      this.previous.blur();
    });
    this.next.addEventListener('click', () => {
      if (possible) debounce(right);
      possible = false;
      this.next.blur();
    });
    this.phones.forEach(item => {
      const screen = item.querySelector('.slider__img-screen');
      if (screen !== null) {
        item.addEventListener('click', evt => {
          const target = evt.target;
          if (!target.closest('.slider__img-shadow')) {
            screen.classList.toggle('visually-hidden');
          }
        });
      }
    });
  }
}
export default Slider;
