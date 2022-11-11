let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}





/*let slideIndex = 0;
showSlides();

function showSlides(){
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for(i = 0; i< slides.length; i++) {
        slides[i] .style.display ="none";
    }

    slideIndex++;
    if( slideIndex > slideIndex.length) {slideIndex = 1}
    for(i = 0; i< dots.length; i++) {
        dots[i] .className = dots[i].className.replace(" active", "");
}
slides[slideIndex -1].style.display = "block";
dots[slideIndex - 1].className += " active";
//Changes image every 2 seconds
setTimeout(showSlides, 2000); 
}


const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const images = document.querySelector('.carousel').children;
const totalImages = images.length;
let index = 0;


prev.addEventListener('click', () => {
  nextImage('next');
})
next.addEventListener('click', () => {
  nextImage('prev');
})


function nextImage(direction) {
  if(direction == 'next') {
    index++;  // increase by 1, Global variable
    if(index == totalImages) {
      index = 0;
    }
  } else {
    if(index == 0) {
      index = totalImages - 1;
    } else {
      index--; // Backwards by 1
    }
  }
  
  for(let i = 0; i < images.length; i++) {
    images[i].classList.remove('main');
  }
  images[index].classList.add('main');
}*/