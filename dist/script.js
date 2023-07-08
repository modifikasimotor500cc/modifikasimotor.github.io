function redirectToURL(url) {
  window.location.href = url;
}

// Initialize Swiper
var swiper = new Swiper(".swiper-container", {
  autoplay: {
    delay: 5000, // Adjust the delay between slides (in milliseconds)
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});

var swiper2 = new Swiper(".my2Swiper", {
  autoplay: {
    delay: 1000, // Adjust the delay between slides (in milliseconds)
  },
  effect: "cube",
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  loop: true,
});
