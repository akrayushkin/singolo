class Gallery {
  constructor(element) {
    this.gallery = document.querySelector(element);
    this.init();
  }

  init() {
    this.galleryItems = this.gallery.querySelectorAll('.gallery__item');
    this.filters = document.querySelector('.portfolio__filter');
    this.actions();
  }

  _sortArayRandomly(array) {
    const arrayCopy = [...array];
    function compareRandom(a, b) {
      return Math.random() - 0.5;
    }
    arrayCopy.sort(compareRandom);
    return arrayCopy;
  }

  _mixGallery(collection) {
    const array = [...collection];
    while (this.gallery.firstChild) {
      this.gallery.removeChild(this.gallery.firstChild);
    }
    this._sortArayRandomly(array).forEach(item => {
      this.gallery.appendChild(item);
    })
  }

  actions() {
    this.filters.addEventListener('click', (evt) => {
      const target = evt.target;
      if (target.closest('.filter__link') && !target.closest('.filter__link--active')) {
        this._mixGallery(this.galleryItems);
        this.filters.querySelectorAll('.filter__link').forEach(item => {
          item.classList.remove('filter__link--active')
        });
        target.closest('.filter__link').classList.add('filter__link--active');
      }
    });
    this.gallery.addEventListener('click', (evt) => {
      const target = evt.target;
      if (target.closest('.gallery__item')) {
        if(target.closest('.gallery__item--active')) {
          target.closest('.gallery__item--active').classList.toggle('gallery__item--active');
        } else {
          this.galleryItems.forEach(item => item.classList.remove('gallery__item--active'));
          target.closest('.gallery__item').classList.add('gallery__item--active');
        }
      }
    });
  }
}

export default Gallery;
