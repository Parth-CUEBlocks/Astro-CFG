import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function initSliders() {
  // --- 1. Existing Generic/Top Slider ---
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

  // --- 2. New Testimonial Slider (Completely Separate) ---
  if (document.querySelector('.testimonial-swiper')) {
    new Swiper('.testimonial-swiper', {
      modules: [Navigation, Pagination, Autoplay],
      loop: true,
      slidesPerView: 1, 
      spaceBetween: 30, 
      autoplay: {
        delay: 4000, 
        disableOnInteraction: false,
      },
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

  // --- 3. New Partners Logo Ticker Slider ---
  if (document.querySelector('.partners-swiper')) {
    new Swiper('.partners-swiper', {
      modules: [Autoplay],
      loop: true,
      // spaceBetween: 30,
      slidesPerView: 2,
      slidesPerGroup: 1, 
      watchSlidesProgress: true, // Prevents elements from rendering with out-of-bounds offsets
      autoplay: {
        delay: 3000, 
        disableOnInteraction: false,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          spaceBetween: 30,
        },
        992: {
          slidesPerView: 5, 
          slidesPerGroup: 1, 
        }
      }
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