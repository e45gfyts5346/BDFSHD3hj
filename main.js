document.getElementById("year").textContent = new Date().getFullYear();

// Tilt 3D effect
document.querySelectorAll("[data-tilt]").forEach((el) => {
  el.addEventListener("mousemove", (e) => {
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const centerX = r.width / 2;
    const centerY = r.height / 2;
    const dx = (x - centerX) / centerX;
    const dy = (y - centerY) / centerY;
    el.style.transform = `rotateX(${dy * -6}deg) rotateY(${dx * 6}deg)`;
  });
  el.addEventListener("mouseleave", () => {
    el.style.transform = "rotateX(0) rotateY(0)";
  });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const target = document.querySelector(a.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
