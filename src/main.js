import { fetchImages } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const searchForm = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loadingIndicator = document.querySelector('.loading-indicator');

let lightbox = new SimpleLightbox('.gallery a');

searchForm.addEventListener('submit', onSearch);


function onSearch(event) {
  event.preventDefault();
  
  const query = event.target.elements.searchQuery.value.trim();
  
  if (query === '') {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search term!',
      position: 'topRight'
    });
    return;
  }
  
  gallery.innerHTML = ''; 
  loadingIndicator.style.display = 'block';
  
  fetchImages(query)
    .then((data) => {
      loadingIndicator.style.display = 'none'; 
      
      if (data.hits.length === 0) {
        iziToast.error({
          title: 'Error',
          message: 'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight'
        });
        return;
      }
      
      renderImages(data.hits);
      lightbox.refresh(); 
    })
    .catch((error) => {
      loadingIndicator.style.display = 'none';
      iziToast.error({
        title: 'Error',
        message: 'Failed to fetch images. Please try again later!',
        position: 'topRight'
      });
      console.error('Error in fetching images:', error);
    });
}
