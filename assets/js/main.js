// Get the modal
var modal = document.getElementById("singleModal");

function closeSingleModal() {
  modal.style.display = "none";
}

function openModal(image) {
  var modalImg = document.getElementById("imgContent");
  var captionText = document.getElementById("modalCaption");
  modal.style.display = "block";
  modalImg.src = image.src;
  captionText.innerHTML = image.alt;
}

function openMultiModal(modal) {
	document.getElementById(modal).classList.add("active");
}

function closeMultiModal(modal) {
	document.getElementById(modal).classList.remove("active");
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
	var allModals = document.getElementsByClassName("multiModal");
	for (var i = 0; i < allModals.length; i++) {
		if (allModals[i].classList.contains("active")) {
			var slides = allModals[i].querySelectorAll(".mySlides");
			var dots = allModals[i].querySelectorAll(".demo");
			var captionText = allModals[i].querySelectorAll(".multiModalCaption");

			var j;
			if (n > slides.length) {slideIndex = 1}
		  if (n < 1) {slideIndex = slides.length}
		  for (j = 0; j < slides.length; j++) {
		      slides[j].style.display = "none";
		  }
		  for (j = 0; j < dots.length; j++) {
		      dots[j].className = dots[j].className.replace(" active", "");
		  }
		  slides[slideIndex-1].style.display = "block";
		  dots[slideIndex-1].classList.className += " active";
		  captionText.innerHTML = dots[slideIndex-1].alt;
		}
	}
}
