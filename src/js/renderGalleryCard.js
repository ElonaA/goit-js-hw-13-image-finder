import refs from './refs';
import { debounce } from 'lodash';
import ApiService from './ApiService';
import  markupGallery from './galleryMarkup';
import { noMatchesFound, noResultsFind } from './infoNotify';
import './openModal.js';
import { showPreloader, hidePreloader } from './preloader.js';

const API = new ApiService();

refs.searchInput.addEventListener('input', debounce(onSearchInputReguest, 1000));
refs.searchInput.addEventListener('submit', (e)=>{e.preventDefault();});


function onSearchInputReguest(e) {   
  e.preventDefault();
  clearGalleryContainer();
  API.query = e.target.value.trim();
    
  if (API.query === '') {
    return noResultsFind();
  } 

  API.reset();
  fetchImages();
}

export function fetchImages() {
   return API.fetchImage().then(data => {
   document.body.classList.remove('loaded');
    setTimeout(showPreloader, 1000)
    refs.loadMore.classList.remove('hidden');
    
    markupGallery(data);
    scrollPage();
    
    if (data.length === 0 || data.length < 12 ) {
     refs.loadMore.classList.add('hidden');
      noMatchesFound();
     }
     
  }).finally(() => {
    setTimeout(hidePreloader, 2000)
    });  
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

