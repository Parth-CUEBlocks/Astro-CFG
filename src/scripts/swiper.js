import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function initSliders() {
  // --- Existing Swiper Slider ---
  if (document.querySelector('.swiper')) {
    new Swiper('.swiper', {
      modules: [Navigation, Pagination, Autoplay],
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }

  // --- New Testimonial Slider (Completely Separate) ---
  if (document.querySelector('.testimonial-swiper')) {
    new Swiper('.testimonial-swiper', {
      modules: [Navigation, Pagination, Autoplay],
      loop: true,
      slidesPerView: 1, // Shows one testimonial group at a time
      spaceBetween: 30, // Spacing between slides
      autoplay: {
        delay: 4000, // Slightly longer delay for reading text
        disableOnInteraction: false,
      },
      // Breakpoints matching your design if you want 2 columns on desktop
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        }
      },
      navigation: {
        nextEl: '.testimonial-next',
        prevEl: '.testimonial-prev',
      },
      pagination: {
        el: '.testimonial-pagination',
        clickable: true,
      },
    });
  }
}

// Execution lifecycle wrappers
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSliders);
} else {
  initSliders();
}

document.addEventListener('astro:after-swap', initSliders);