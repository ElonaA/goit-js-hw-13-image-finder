import refs from './refs';
import * as basicLightbox from 'basiclightbox'
import 'basiclightbox/dist/basicLightbox.min.css';

refs.galleryCardContainer.addEventListener('click', openModalImage);

function openModalImage(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG') {
    return;
  }

  const changeModalImage = `<img src=${e.target.dataset.source} alt="" />`;
  const instance = basicLightbox.create(changeModalImage);

  instance.show();

  }
