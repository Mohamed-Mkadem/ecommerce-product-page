// Navigation Functionnalities
const menuController = document.getElementById("menu-controller");
const linksMenu = document.getElementById("links");
menuController.addEventListener("click", () => {
  linksMenu.classList.toggle("open");
  if (linksMenu.classList.contains("open")) {
    menuController.querySelector(".icon-menu").style.display = "none";
    menuController.querySelector(".icon-close").style.display = "block";
  } else {
    menuController.querySelector(".icon-menu").style.display = "block";
    menuController.querySelector(".icon-close").style.display = "none";
  }
});
// Show/hide Cart Functionnality
const cartBtn = document.querySelector(".cart-btn");
const cart = document.getElementById("cart");
const items = document.getElementById("items");
cartBtn.addEventListener("click", () => {
  cart.classList.toggle("open");
  cartBtn.querySelector("img").classList.toggle("active");
});
// Add/remove items to the cart
const addToCartBtn = document.getElementById("add-to-cart");
const removeFromCartBtn = document.getElementById("delete");
addToCartBtn.addEventListener("click", () => {
  cart.classList.remove("empty");
  cartBtn.classList.add("filled");
  items.textContent = parseInt(items.textContent) + parseInt(quantity.value);
});
if (removeFromCartBtn) {
  removeFromCartBtn.addEventListener("click", () => {
    cart.classList.add("empty");
    cartBtn.classList.remove("filled");
    items.textContent = 0;
  });
}
// Change the main image Functionnality
const mainImages = Array.from(document.querySelectorAll(".main-image img"));
const thumbnails = Array.from(document.querySelectorAll(".img-holder"));
thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    activeRemover(thumbnails);
    thumbnail.classList.add("active");
    activeRemover(mainImages);
    const targetImg = thumbnail.dataset.img;
    addActive(mainImages, targetImg);
  });
});

function activeRemover(array) {
  array.forEach((arrItem) => {
    arrItem.classList.remove("active");
  });
}
function addActive(array, target) {
  array.forEach((arrayItem) => {
    if (arrayItem.dataset.img == target) {
      arrayItem.classList.add("active");
    }
  });
}
// Increment/decrement the quantity of the product to add to cart
const minusBtn = document.getElementById("minus");
const plusBtn = document.getElementById("plus");
const quantity = document.getElementById("quantity");

minusBtn.addEventListener("click", () => {
  if (quantity.value > 1) {
    quantity.value = parseInt(quantity.value) - 1;
  }
});
plusBtn.addEventListener("click", () => {
  if (quantity.value < 99) {
    quantity.value = parseInt(quantity.value) + 1;
  }
});

// Image Slider Functionnality On mobile/tablet screen
const prevBtn = document.querySelector(".previous-icon");
const nextBtn = document.querySelector(".next-icon");
const currentImage = document.querySelector(".main-image img.active");

nextBtn.addEventListener("click", () => {
  const currentImage = document.querySelector(".main-image img.active");
  const nextImg = currentImage.nextElementSibling;
  if (!nextImg) return;

  moveToSlide(currentImage, nextImg);
});
prevBtn.addEventListener("click", () => {
  const currentImage = document.querySelector(".main-image img.active");
  const prevImg = currentImage.previousElementSibling;
  if (!prevImg) return;
  moveToSlide(currentImage, prevImg);
});

function moveToSlide(currentImage, targetImg) {
  currentImage.classList.remove("active");
  targetImg.classList.add("active");
}

// Lightbox Functionnality
if (window.innerWidth > 881) {
  const imagesHolder = document.querySelector(".main-image");
  const lightbox = document.getElementById("lightbox");
  const lightboxImages = Array.from(
    lightbox.querySelectorAll(".main-image img")
  );
  const lightboxThumbnails = Array.from(
    lightbox.querySelectorAll(".thumbnails .img-holder")
  );

  imagesHolder.addEventListener("click", (e) => {
    const img = document.querySelector(".main-image img.active");
    lightbox.classList.add("open");
    // Set the main image of the lightbox
    activeRemover(lightboxImages);
    addActive(lightboxImages, img.dataset.img);
    // Change the state of the thumbnails
    activeRemover(lightboxThumbnails);
    addActive(lightboxThumbnails, img.dataset.img);
    document.body.style.overflowY = "hidden";
  });
  // Lightbow Next and previous buttons functionnality
  const lightboxNextBtn = lightbox.querySelector(".next-icon");
  const lightboxPreviousBtn = lightbox.querySelector(".previous-icon");
  lightboxNextBtn.addEventListener("click", () => {
    const currentSlide = lightbox.querySelector(".main-image img.active");
    const targetSlide = currentSlide.nextElementSibling;
    if (!targetSlide) return;
    moveToSlide(currentSlide, targetSlide);
    activeRemover(lightboxThumbnails);
    addActive(lightboxThumbnails, targetSlide.dataset.img);
  });
  lightboxPreviousBtn.addEventListener("click", () => {
    const currentSlide = lightbox.querySelector(".main-image img.active");
    const targetSlide = currentSlide.previousElementSibling;
    if (!targetSlide) return;
    moveToSlide(currentSlide, targetSlide);
    activeRemover(lightboxThumbnails);
    addActive(lightboxThumbnails, targetSlide.dataset.img);
  });
  // Close the lightbox
  const closeLightboxBtn = document.getElementById("close-lightbox");
  closeLightboxBtn.addEventListener("click", () => {
    lightbox.classList.remove("open");
    document.body.style.overflowY = "auto";
  });
} else {
  lightbox.classList.remove("open");
}
