function WHATSAPP() {
  window.location.href = "https://wa.me/+6281360295177";
}
var moreBtn = document.getElementById("more-btn");
var moreBtn1 = document.getElementById("more-btn1");
var moreBtn2 = document.getElementById("more-btn2");
var contact = document.getElementById("contact");
var sidebar = document.getElementById("sidebar");
var sidebar1 = document.getElementById("sidebar1");
var sidebar2 = document.getElementById("sidebar2");
var contactbar = document.getElementById("contactbar");
var hydraulics = document.getElementById("hydraulics");
var nitrogen = document.getElementById("nitrogen-pump");
var shaking = document.getElementById("shaking");

if (moreBtn) {
  moreBtn.addEventListener("click", function (e) {
    e.preventDefault();
    sidebar.classList.toggle("visible");
  });
}
if (moreBtn1) {
  moreBtn1.addEventListener("click", function (e) {
    e.preventDefault();
    sidebar1.classList.toggle("visible");
  });
}
if (moreBtn2) {
  moreBtn2.addEventListener("click", function (e) {
    e.preventDefault();
    sidebar2.classList.toggle("visible");
  });
}
if (contact) {
  contact.addEventListener("click", function (e) {
    e.preventDefault();
    contactbar.classList.toggle("visible");
  });
}
if (hydraulics) {
  hydraulics.addEventListener("click", function (e) {
    window.location.href = "hydraulics.html";
  });
}
if (nitrogen) {
  nitrogen.addEventListener("click", function (e) {
    window.location.href = "nitrogen.html";
  });
}
if (shaking) {
  shaking.addEventListener("click", function (e) {
    window.location.href = "shaking.html";
  });
}

var sidebarLinks = sidebar.querySelectorAll("a");
sidebarLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    sidebar.classList.remove("visible");
  });
});
var sidebarLinks1 = sidebar1.querySelectorAll("a");
sidebarLinks1.forEach(function (link) {
  link.addEventListener("click", function () {
    sidebar1.classList.remove("visible");
  });
});
var sidebarLinks2 = sidebar2.querySelectorAll("a");
sidebarLinks2.forEach(function (link) {
  link.addEventListener("click", function () {
    sidebar2.classList.remove("visible");
  });
});
var contactbarLink = contactbar.querySelectorAll("a");
contactbarLink.forEach(function (link) {
  link.addEventListener("click", function () {
    contactbar.classList.remove("visible");
  });
});
document.addEventListener("click", function (e) {
  if (!sidebar.contains(e.target) && e.target !== moreBtn) {
    sidebar.classList.remove("visible");
  }
});
document.addEventListener("click", function (e) {
  if (!sidebar1.contains(e.target) && e.target !== moreBtn1) {
    sidebar1.classList.remove("visible");
  }
});
document.addEventListener("click", function (e) {
  if (!sidebar2.contains(e.target) && e.target !== moreBtn2) {
    sidebar2.classList.remove("visible");
  }
});
document.addEventListener("click", function (e) {
  if (!contactbar.contains(e.target) && e.target !== contact) {
    contactbar.classList.remove("visible");
  }
});

// Carousel initialization
const carouselTrack = document.getElementById("carouselTrack");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const slides = document.querySelectorAll(".carousel-slide");

let currentIndex = 0;
const totalSlides = slides.length;

function moveCarousel(n) {
  currentIndex = (currentIndex + n + totalSlides) % totalSlides;
  const offset = currentIndex * 25;
  carouselTrack.style.transform = `translateX(-${offset}%)`;
  console.log(
    "Carousel moved to index:",
    currentIndex,
    "offset:",
    -offset + "%",
  );
}

// Button click handlers
if (nextBtn && carouselTrack) {
  nextBtn.addEventListener("click", function () {
    moveCarousel(1);
  });
}

if (prevBtn && carouselTrack) {
  prevBtn.addEventListener("click", function () {
    moveCarousel(-1);
  });
}

// Auto-rotate carousel
if (carouselTrack) {
  setInterval(function () {
    moveCarousel(1);
  }, 5000);
}

function returnBtn() {
  window.location.href = "index.html";
}
