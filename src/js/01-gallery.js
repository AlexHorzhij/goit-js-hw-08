// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css"

const gallery = document.querySelector(".gallery")

const imgItemsMarkup = galleryItems.reduce((acc, item) => {
return acc += `<a class="gallery__item" href=${item.original}>
  <img class="gallery__image" src=${item.preview} alt=${item.description} />
</a>`
}, "")

gallery.insertAdjacentHTML('beforeend', imgItemsMarkup)

const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', });
