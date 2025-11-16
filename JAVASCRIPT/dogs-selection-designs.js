var swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,       // Number of slides visible at once
  spaceBetween: 20,       // Space between slides
  loop: true,             // Enable looping
  speed: 500,             // Transition speed for smoothness
  simulateTouch: true,    // Enables touch-based navigation
  loopAdditionalSlides: 3, // Preload 3 slides for smooth looping
  preloadImages: true,    // Preload images for smoother performance
  navigation: {
    nextEl: '.swiper-button-next',  // Next button
    prevEl: '.swiper-button-prev',  // Previous button
  },
  breakpoints: {
    1024: {
      slidesPerView: 2,  // Show 2 slides on medium screens
    },
    768: {
      slidesPerView: 1,  // Show 1 slide on small screens
    },
  },
  on: {
    slideChange: function () {
      // Remove the pop effect from all slides before applying it to the left slide
      this.slides.forEach(slide => slide.classList.remove('pop-left'));

      // Calculate the index of the leftmost slide (previous slide)
      const leftSlideIndex = (this.activeIndex - 1 + this.slides.length) % this.slides.length;
      this.slides[leftSlideIndex].classList.add('pop-left');
    }
  }
});

// Apply the pop-left effect to the leftmost image when the Swiper is initialized
swiper.on('init', function () {
  // Calculate the index of the leftmost slide (previous slide) and add the pop-left effect
  const leftSlideIndex = (swiper.activeIndex - 1 + swiper.slides.length) % swiper.slides.length;
  swiper.slides[leftSlideIndex].classList.add('pop-left');
});

// Initialize Swiper
swiper.init();

// Variables to handle the interval for continuous sliding
let slideInterval = null;
let isNextButtonPressed = false;
let isPrevButtonPressed = false;

// Detect press and hold on the next button
document.querySelector('.swiper-button-next').addEventListener('mousedown', function () {
  if (!isNextButtonPressed) {
    isNextButtonPressed = true;
    slideInterval = setInterval(() => {
      swiper.slideNext();
    }, 100); // 100ms interval for continuous sliding
  }
});

// Detect release of the next button
document.querySelector('.swiper-button-next').addEventListener('mouseup', function () {
  isNextButtonPressed = false;
  clearInterval(slideInterval);
});

document.querySelector('.swiper-button-next').addEventListener('mouseleave', function () {
  isNextButtonPressed = false;
  clearInterval(slideInterval);
});

// Detect press and hold on the prev button
document.querySelector('.swiper-button-prev').addEventListener('mousedown', function () {
  if (!isPrevButtonPressed) {
    isPrevButtonPressed = true;
    slideInterval = setInterval(() => {
      swiper.slidePrev();
    }, 100); // 100ms interval for continuous sliding
  }
});

// Detect release of the prev button
document.querySelector('.swiper-button-prev').addEventListener('mouseup', function () {
  isPrevButtonPressed = false;
  clearInterval(slideInterval);
});

document.querySelector('.swiper-button-prev').addEventListener('mouseleave', function () {
  isPrevButtonPressed = false;
  clearInterval(slideInterval);
});
