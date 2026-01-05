// Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector("i");

const currentTheme = localStorage.getItem("theme") || "light";
document.documentElement.setAttribute("data-theme", currentTheme);

if (currentTheme === "dark") {
  themeIcon.classList.replace("fa-moon", "fa-sun");
}

themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  if (newTheme === "dark") {
    themeIcon.classList.replace("fa-sun", "fa-moon");
  } else {
    themeIcon.classList.replace("fa-moon", "fa-sun");
  }
});

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileNav = document.getElementById("mobileNav");
const mobileIcon = mobileMenuBtn.querySelector("i");

mobileMenuBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("active");

  if (mobileNav.classList.contains("active")) {
    mobileIcon.classList.replace("fa-bars", "fa-times");
  } else {
    mobileIcon.classList.replace("fa-times", "fa-bars");
  }
});

// Close mobile menu when clicking on links
document.querySelectorAll(".nav-mobile .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("active");
    mobileIcon.classList.replace("fa-times", "fa-bars");
  });
});

// Active Navigation Link
function updateActiveNavLink() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  let current = "";
  const scrollY = window.pageYOffset;
  const headerHeight = document.querySelector(".header").offsetHeight;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - headerHeight - 100;
    const sectionHeight = section.offsetHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", updateActiveNavLink);

AOS.init({
  duration: 1000,
  once: false,
  offset: 100,
  disable: "mobile",
});
const typed = new Typed("#typed-text", {
  strings: [
    "I'm A Frontend Developer",
    "I Build Modern Websites",
    "IS Student at Damietta University",
    "Building Scalable Web Solutions",
  ],
  typeSpeed: 50,
  backSpeed: 30,
  backDelay: 1500,
  loop: true,
});
