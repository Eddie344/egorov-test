document.addEventListener("DOMContentLoaded", function() {
  var mySwiper = new Swiper(".swiper-container", {
    // Optional parameters
    direction: "horizontal",
    loop: false,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      type: "fraction"
    },
    renderFraction: function(currentClass, totalClass) {
      return (
        '<span class="' +
        currentClass +
        '"></span>' +
        " из " +
        '<span class="' +
        totalClass +
        '"></span>'
      );
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      700: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1000: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  });
});
