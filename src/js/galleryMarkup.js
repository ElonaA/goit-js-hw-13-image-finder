import galleryCardTemplate from '../templates/GalleryCard.hbs';
import refs from './refs.js';

 export default function markupCountry(searchData) {
   const markup = galleryCardTemplate(searchData);
   refs.galleryCardContainer.insertAdjacentHTML('beforeend', markup);
}

