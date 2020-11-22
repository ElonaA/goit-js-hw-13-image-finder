import refs from './refs';
import { debounce } from 'lodash';
import ApiService from './ApiService';
import  markupGallery from './galleryMarkup';
import { noticeError } from './infoNotify';
import './openModal.js';


const API = new ApiService();
refs.searchInput.addEventListener('input', debounce(onSearchInputReguest, 1000));


export function onSearchInputReguest(e) {   

    e.preventDefault();
    clearGalleryContainer();
    API.query = e.target.value.trim();
    
    if (API.query === '') {
        return noResultsFind();
     } 
     refs.loadMore.classList.remove('hidden');
     API.reset();
     fetchImages();
  
}
export function fetchImages() {
    return API.fetchImage().then(data => {
        markupGallery(data);
        scrollPage();
    
    if (data.length === 0 || data.length < 12 ) {
     refs.loadMore.classList.add('hidden');
      noMatchesFound();
        }
    });
    
}

function noResultsFind() {
     refs.loadMore.classList.add('hidden');
    noticeError(
        `Please enter search word! `,
        'error',
        );
}

function noMatchesFound() {
    noticeError(
        `Sorry. No images has been found!`,
        'error',
    );
}

function clearGalleryContainer() {
  refs.galleryCardContainer.innerHTML = '';
}
 

function scrollPage() {
  try {
    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        left: 0,
        behavior: 'smooth',
      });
    }, 1000);
  } catch (error) {
    console.log(error);
  }
}
