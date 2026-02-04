// Smooth scroll
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Active nav link
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    if (pageYOffset >= section.offsetTop - 120) {
      current = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === "#" + current
    );
  });
});

// Fade-in animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".section").forEach(sec => observer.observe(sec));

// Skill bar animation
window.addEventListener("scroll", () => {
  document.querySelectorAll(".skill-bar span").forEach(bar => {
    bar.style.width = bar.dataset.level;
  });
});

// Dark / Light mode
document.getElementById("themeToggle").onclick = () => {
  document.body.classList.toggle("light");
};

// Mobile menu
document.getElementById("menuToggle").onclick = () => {
  document.querySelector("nav ul").classList.toggle("show");
};
