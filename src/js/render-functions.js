import SimpleLightbox from 'simplelightbox';
import iziToast from 'izitoast';
import 'simplelightbox/dist/simple-lightbox.min.css';
import 'izitoast/dist/css/iziToast.min.css';

export {
  createGallery,
  removeGallery,
  showLoader,
  hideLoader,
  showError,
  showMessage,
  showLoadMore,
  hideLoadMore,
  loadMoreEl,
};

const galleryEl = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader');
const loadMoreEl = document.querySelector('.load-more button');

const optionsiziToast = {
  messageColor: 'white',
  position: 'topRight',
  message: '',
};

function createGallery(hits) {
  const galleryItems = hits
    .map(image => {
      const {
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      } = image;
      return `
            <a class="gallery-link" href="${largeImageURL}">
                <img
                    class="gallery-image"
                    src="${webformatURL}"
                    data-source="${largeImageURL}"
                    alt="${tags}"
                />
                <div class="image-descrition">
                    <div>
                        <span class="image-descrition-font">Likes</span>
                        <span class="image-descrition-font">${likes}</span>
                    </div>
                    <div>
                        <span class="image-descrition-font">Views</span>
                        <span class="image-descrition-font">${views}</span>
                    </div>
                    <div>
                        <span class="image-descrition-font">Comments</span>
                        <span class="image-descrition-font">${comments}</span>
                    </div>
                    <div>
                        <span class="image-descrition-font">Downloads</span>
                        <span class="image-descrition-font">${downloads}</span>
                    </div>
                </div>
            </a>`;
    })
    .join('');

  galleryEl.insertAdjacentHTML('beforeend', galleryItems);
  new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  }).refresh();
}

function removeGallery() {
  galleryEl.innerHTML = '';
}

function showLoader() {
  loaderEl.innerHTML = '<span></span>';
}

function hideLoader() {
  loaderEl.innerHTML = '';
}

function showLoadMore() {
  loadMoreEl.style.display = 'block';
}

function hideLoadMore() {
  loadMoreEl.style.display = 'none';
}

function showError(error) {
  optionsiziToast.message = error;
  optionsiziToast.backgroundColor = 'red';
  iziToast.error(optionsiziToast);
}

function showMessage(message) {
  optionsiziToast.message = message;
  iziToast.info(optionsiziToast);
}
