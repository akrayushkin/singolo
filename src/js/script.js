import Slider from './slider';
import Navigation from './navigation';
import Gallery from './gallery';
import FormSubmission from './form-submission';

/* eslint-disable no-unused-vars */
document.addEventListener('DOMContentLoaded', () => {
  const slider = new Slider('.slider');
  const navigation = new Navigation('.main-nav', '.anchor-links');
  const gallery = new Gallery('.gallery__list');
  const formSubmission = new FormSubmission('.form', '.modal');
});
