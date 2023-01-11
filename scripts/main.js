'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.wrap-header');
  const mobileHeader = document.querySelector('.mobile');
  const burger = document.querySelector('.burger');
  let navLinks = document.querySelectorAll(
    '.mobile nav a, .mobile header .logo'
  );

  window.addEventListener('scroll', function () {
    if (window.pageYOffset > 10) {
      header.classList.add('active');
      return;
    }

    header.classList.remove('active');
  });

  burger.addEventListener('click', () => {
    mobileHeader.classList.toggle('active');
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      mobileHeader.classList.remove('active');
    });
  });

  $('#main-slider').owlCarousel({
    items: 1,
    lazyLoad: true,
    loop: true,
    autoplay: true,
    dots: false,
  });

  $('#clients-slider').owlCarousel({
    lazyLoad: true,
    loop: true,
    autoplay: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 3,
        margin: 20,
      },
      1024: {
        items: 5,
        margin: 20,
        nav: true,
      },
    },
  });

  $('#certificates-slider').owlCarousel({
    lazyLoad: true,
    loop: true,
    autoplay: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 3,
        margin: 20,
        nav: true,
      },
    },
  });

  Fancybox.bind('[data-fancybox="certificates"]', {
    Toolbar: false,
    Thumbs: false,
    closeButton: 'top',
  });

  Fancybox.bind('[data-fancybox="charter"]', {
    Toolbar: false,
    Thumbs: false,
    closeButton: 'top',
  });
});
