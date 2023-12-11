const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");
const links = document.querySelectorAll(".menu li a");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.remove("active");
    nav.classList.remove("active");
  });
});

// smooth index-arrow scroll animation 

document.addEventListener('DOMContentLoaded', function () {
  const scrollLinks = document.querySelectorAll('.scroll-down-link');

  scrollLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const offsetTop = targetElement.offsetTop;
        const duration = 1000; // Change the duration as needed (in milliseconds)

        smoothScroll(offsetTop, duration);
      }
    });
  });

  function smoothScroll(targetPosition, duration) {
    const startingPosition = window.pageYOffset || document.documentElement.scrollTop;
    const distance = targetPosition - startingPosition;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) {
        startTime = currentTime;
      }

      const timeElapsed = currentTime - startTime;
      const ease = easeOut(timeElapsed, startingPosition, distance, duration);
      window.scrollTo(0, ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }

    function easeOut(t, b, c, d) {
      t /= d;
      t--;
      return c * (t * t * t + 1) + b;
    }

    requestAnimationFrame(animation);
  }
});

// image animation
document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('.image');

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3 // Adjust this threshold as needed
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('image-visible');
        observer.unobserve(entry.target);
      }
    });
  }, options);

  images.forEach(image => {
    observer.observe(image);
  });
});
