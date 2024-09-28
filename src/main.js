import { fetchImages } from './js/pixabay-api';
import {
  createGallery,
  removeGallery,
  showError,
  showMessage,
  showLoader,
  hideLoader,
  showLoadMore,
  hideLoadMore,
  loadMoreEl,
} from './js/render-functions';

let imageName = '';
let currentPage = 1;
let pages = 0;
const perPage = 15;
const imageForm = document.querySelector('.form-image');

const fetchParams = {
  q: imageName,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  page: currentPage,
  per_page: perPage,
};

const handleScrollView = () => {
  const lastChild = document.querySelector('.gallery-link:last-child');
  const scrollHeight = lastChild.getBoundingClientRect().height * 2;

  window.scrollBy({
    top: scrollHeight,
    left: 0,
    behavior: 'smooth',
  });
};

const onSubmitForm = async event => {
  const { imageName } = event.currentTarget.elements;
  fetchParams.q = imageName.value;

  event.preventDefault();
  event.currentTarget.reset();

  removeGallery();
  hideLoadMore();
  showLoader();

  try {
    const {hits, totalHits} = await fetchImages(fetchParams);
    pages = Math.ceil(totalHits / perPage);
    createGallery(hits);

    if (pages > 1) {
      showLoadMore();
    }
  } catch (error) {
    showError(error.message);
  } finally {
    hideLoader();
  };
};

const loadMore = async () => {
  currentPage += 1;
  fetchParams.page = currentPage;
  hideLoadMore();
  showLoader();

  try {
    const {hits} = await fetchImages(fetchParams);
    createGallery(hits);
    handleScrollView();

    if (currentPage < pages) {
      showLoadMore();
    } else {
      showMessage("We're sorry, but you've reached the end of search results.");
    }
  } catch (error) {
    showError(error.message);
  } finally {
    hideLoader();
  };
};

imageForm.addEventListener('submit', onSubmitForm);
loadMoreEl.addEventListener('click', loadMore);
