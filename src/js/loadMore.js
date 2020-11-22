import refs from './refs.js';
import {fetchImages} from './renderGalleryCard';

refs.loadMore.addEventListener('click', onLoadMoreClick);

function onLoadMoreClick() {
    fetchImages();
}
