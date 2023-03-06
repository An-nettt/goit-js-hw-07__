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
let lightboxImage = 0;

galerryImages.addEventListener("click", onImageClick);

function onImageClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
  galerryImages.addEventListener("keydown", onCloseImageKeyEsc);

  lightboxImage = basicLightbox
    .create(`<img src=${evt.target.dataset.source}>`)
    .show();
}

function onCloseImageKeyEsc(event) {
  if (event.code === "Escape") {
    lightboxImage.close();
    galerryImages.removeEventListener("keydown", onCloseImageKeyEsc);
  }
}
