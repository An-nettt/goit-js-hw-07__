import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galerryImages = document.querySelector(".gallery");
const galleryMarkUp = createGallery(galleryItems);

galerryImages.innerHTML = galleryMarkUp;

function createGallery(galleryItems) {
  const imagesMarkUp = galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
    </a>
    </div>`;
    })
    .join("");
  return imagesMarkUp;
}

console.log(galleryItems);
