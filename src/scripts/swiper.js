import Swiper from 'swiper';
// 1. Added Autoplay to the imports
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function initSwiper() {
  if (document.querySelector('.swiper')) {
    new Swiper('.swiper', {
      // 2. Added Autoplay to the modules array
      modules: [Navigation, Pagination, Autoplay],
      loop: true,
      
      // 3. Added Autoplay settings
      autoplay: {
        delay: 3000, // Time in milliseconds between slide transitions (3 seconds)
        disableOnInteraction: false, // Keeps autoplay running even after user swipes/clicks
      },
      
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      
      pagination: {
        el: '.swiper-pagination',
        clickable: true, // 4. This makes the pagination dots clickable!
      },
    });
  }
}

// Safely run whether DOM is loading or already loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSwiper);
} else {
  initSwiper();
}

// If you use Astro View Transitions, re-init on page swaps
document.addEventListener('astro:after-swap', initSwiper);