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
    for(let i = 0; i < elements.length; i++) {
      if (!elements[i].classList.contains('visually-hidden')) {
        return i;
      }
    }
  }

  _changeBackgroundColor(elem) {
    if (elem.classList.contains('slider__item--3-phones')) {
      this.slider.style.backgroundColor = "#648BF0";
      this.slider.style.borderColor = "#5780e7";
    } else if (elem.classList.contains('slider__item--2-phones')) {
      this.slider.style.backgroundColor = "#f06c64";
      this.slider.style.borderColor = "#ea676b";
    }
  }

  actions() {
    this.previous.addEventListener('click', () => {
      const i = this._findCurrentSlide(this.slides);
      const j = (i - 1 < 0) ? this.slides.length - 1 : i - 1;
      this.slides[i].classList.add('slip-left');
      this.slides[j].classList.add('slip-right');
      setTimeout(() => {
        this.slides[i].classList.remove('slip-left');
        this.slides[i].classList.add('visually-hidden');
        this._changeBackgroundColor(this.slides[j]);
        this.slides[j].classList.remove('visually-hidden');
        this.slides[j].classList.remove('slip-right');
      }, 500);
    })
    this.next.addEventListener('click', () => {
      const i = this._findCurrentSlide(this.slides);
      const j = (i + 1 === this.slides.length) ? 0 : i + 1;
      this.slides[i].classList.add('slip-right');
      this.slides[j].classList.add('slip-left');
      setTimeout(() => {
        this.slides[i].classList.remove('slip-right');
        this.slides[i].classList.add('visually-hidden');
        this._changeBackgroundColor(this.slides[j]);
        this.slides[j].classList.remove('visually-hidden');
        this.slides[j].classList.remove('slip-left');
      }, 500);
    })
    this.phones.forEach((item) => {
      const screen = item.querySelector('.slider__img-screen');
      if( screen !== null) {
        item.addEventListener('click', (evt) => {
          const target = evt.target;
          if (!target.closest('.slider__img-shadow')) {
            screen.classList.toggle('visually-hidden');
          }
        })
      }
    })
  }
}
export default Slider;
