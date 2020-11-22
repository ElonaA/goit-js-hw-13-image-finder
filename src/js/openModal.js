import refs from './refs';
import * as basicLightbox from 'basiclightbox'
import 'basiclightbox/dist/basicLightbox.min.css';

refs.galleryCardContainer.addEventListener('click', openModalImage);

function openModalImage(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG') {
    return;
  }

  console.log('e.target.dataset.source :>> ', e.target.dataset.src);

  const changeModalImage = `<img src=" ${e.target.dataset.src} " alt="" width="1000" />`;
  const instance = basicLightbox.create(changeModalImage);

  instance.show();

  }
