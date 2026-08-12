import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function initSliders() {
  // 1. Generic Top Slider
  if (document.querySelector('.swiper:not(.testimonial-swiper):not(.partners-swiper):not(.clients-swiper)')) {
    new Swiper('.swiper:not(.testimonial-swiper):not(.partners-swiper):not(.clients-swiper)', {
      modules: [Navigation, Pagination, Autoplay, A11y],
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

  // 2. Testimonial Slider
  if (document.querySelector('.testimonial-swiper')) {
    new Swiper('.testimonial-swiper', {
      modules: [Navigation, Pagination, Autoplay, A11y],
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
        },
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

  // 3. Partners Logo Ticker Slider
  if (document.querySelector('.partners-swiper')) {
    new Swiper('.partners-swiper', {
      modules: [Pagination, Autoplay, A11y],
      loop: true,
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 10,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 3,
          slidesPerGroup: 1,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 5,
          slidesPerGroup: 1,
          spaceBetween: 30,
        },
      },
      watchOverflow: true,
    });
  }

  // 4. Our Clients Slider
  const clientsContainer = document.querySelector('.clients-swiper');
  if (clientsContainer) {
    const titleEl = document.getElementById('active-client-title');
    const descEl = document.getElementById('active-client-desc');

    function updateActiveClient(swiper) {
      swiper.slides.forEach((s) => s.classList.remove('active-client'));

      const activeSlide = swiper.slides[swiper.activeIndex];
      if (!activeSlide) return;

      activeSlide.classList.add('active-client');

      const title = activeSlide.getAttribute('data-title') || '';
      const desc = activeSlide.getAttribute('data-description') || '';

      if (titleEl) titleEl.textContent = title ? `${title}:` : '';
      if (descEl) descEl.textContent = desc;
    }

    const clientSwiper = new Swiper('.clients-swiper', {
      modules: [Navigation, Pagination, Autoplay, A11y],
      loop: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      spaceBetween: 0,
      navigation: {
        nextEl: '.client-next',
        prevEl: '.client-prev',
      },
      pagination: {
        el: '.clients-pagination',
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 3,
          centeredSlides: false,
          slidesPerGroup: 1,
        },
        992: {
          slidesPerView: 5,
          centeredSlides: false,
          slidesPerGroup: 1,
        },
      },
      on: {
        init: function () {
          updateActiveClient(this);
        },
        slideChange: function () {
          updateActiveClient(this);
        },
      },
    });

    clientsContainer.addEventListener('click', (e) => {
      const slide = e.target.closest('.client-slide');
      if (slide && clientSwiper) {
        const slideIndex = Array.from(clientSwiper.slides).indexOf(slide);
        if (slideIndex !== -1) {
          clientSwiper.slideTo(slideIndex);
        }
      }
    });
  }
}

// Lifecycle Handlers
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSliders);
} else {
  initSliders();
}

document.addEventListener('astro:after-swap', initSliders);