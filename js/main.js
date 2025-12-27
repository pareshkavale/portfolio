
$(document).ready(function () {

  const navLinks = $('.nav-link');
  const sections = $('section[id]');

  /* ==========================
     Smooth Scroll on Click
  ========================== */
  navLinks.on('click', function (e) {
    const target = this.hash;

    if (target !== "") {
      e.preventDefault();

      $('html, body').animate({
        scrollTop: $(target).offset().top - 80
      }, 800);

      // Active class on click
      navLinks.removeClass('active');
      $(this).addClass('active');
    }
  });

  /* ==========================
     Active Link on Scroll
  ========================== */
  $(window).on('scroll', function () {
    let scrollY = $(window).scrollTop();

    sections.each(function () {
      const sectionTop = $(this).offset().top - 100;
      const sectionHeight = $(this).outerHeight();
      const sectionId = $(this).attr('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.removeClass('active');
        $('.nav-link[href="#' + sectionId + '"]').addClass('active');
      }
    });
  });

});

$(document).ready(function () {

  const navLinks = $('.nav__link');
  const sections = $('section[id]');

  /* ==========================
     Smooth Scroll on Click
  ========================== */
  navLinks.on('click', function (e) {
    const target = this.hash;

    if (target !== "") {
      e.preventDefault();

      $('html, body').animate({
        scrollTop: $(target).offset().top - 80
      }, 800);

      // Active class on click
      navLinks.removeClass('active-link');
      $(this).addClass('active-link');
    }
  });

  /* ==========================
     Active Link on Scroll
  ========================== */
  $(window).on('scroll', function () {
    let scrollY = $(window).scrollTop();

    sections.each(function () {
      const sectionTop = $(this).offset().top - 100;
      const sectionHeight = $(this).outerHeight();
      const sectionId = $(this).attr('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.removeClass('active');
        $('.nav-link[href="#' + sectionId + '"]').addClass('active');
      }
    });
  });

});

particlesJS('particles-js',
{
  "particles": {
    "number": {
      "value": 160,
      "density": {
        "enable": true,
        "value_area": 4000
      }
    },
    "color": {
      "value": "#ff494a"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#ff494a"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 1,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 0.5,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 2,
        "size_min": 0.3,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 600
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "bubble"
      },
      "onclick": {
        "enable": false,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 250,
        "size": 0,
        "duration": 2,
        "opacity": 0,
        "speed": 3
      },
      "repulse": {
        "distance": 400,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}

);