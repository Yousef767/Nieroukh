
var swiper = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 10,
  autoplay: {
    delay: 1500,
    disableOnInteraction: true,
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
    },
    421: {
      slidesPerView: 1.2,
    },
    575: {
      slidesPerView: 1.5,
    },
    700: {
      slidesPerView: 1.9,
    },
    800: {
      slidesPerView: 2.1,
    },
    950: {
      slidesPerView: 2.5,
    },
    1140: {
      slidesPerView: 4,
    },
  },
});

var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  keyboard: {
    enabled: true,
  },
  autoplay: {
    delay: 1500,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<img class="'+className+'"" src="./media/pagination/home' + index + '.jpg">' + "</img>";
    },
  },
});

var swiper = new Swiper(".mySwiper5", {
  slidesPerView: 1,
  keyboard: {
    enabled: true,
  },
  loop:true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  },
  navigation: {
    nextEl: ".next2",
    prevEl: ".prev2",
  },
});
var swiper = new Swiper(".mySwiperCat", {
  slidesPerView: 1,
  spaceBetween: 30,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 1.5,
    },
    600: {
      slidesPerView: 1.7,
    },
    700: {
      slidesPerView: 2.1,
    },
    900: {
      slidesPerView: 2.7,
    },
    1020: {
      slidesPerView: 3.1,
    },
    1201: {
      slidesPerView: 3.5,
    },
  },
});

var swiper = new Swiper(".mySwiper6", {
  slidesPerView: 3,
  spaceBetween: 25,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    300: {
      spaceBetween: 15,
    },
    901: {
      spaceBetween: 25,
    },
  },
  navigation: {
    nextEl: ".next3",
    prevEl: ".prev3",
  },
});
