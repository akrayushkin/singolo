import Slider from './slider';
import Navigation from './navigation';
import Gallery from './gallery';
import FormSubmission from './form-submission';

document.addEventListener('DOMContentLoaded', () => {
  const slider = new Slider('.slider');
  const navigation = new Navigation('.main-nav');
  const gallery = new Gallery('.gallery__list');
  const formSubmission = new FormSubmission('.form', '.modal');
});
