const slidesContainer = document.querySelector(".products-list");
const slide = document.querySelector(".products-item");
const prevButton = document.querySelector(".up-arrow");
const nextButton = document.querySelector(".down-arrow");

nextButton.addEventListener("click", () => {
	const slideWidth = slide.clientWidth;
	slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
	const slideWidth = slide.clientWidth;
	slidesContainer.scrollLeft -= slideWidth;
});
