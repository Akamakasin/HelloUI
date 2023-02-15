const swiper = new Swiper('.swiper', {
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 6,
    loop: true,
    slidesPerGroup: 3,
  });