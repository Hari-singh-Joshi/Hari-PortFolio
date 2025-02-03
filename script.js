// Initialize AOS
AOS.init({
    duration: 1000, // Animation duration
    once: true, // Whether animation should happen only once
  });

  lottie.loadAnimation({
    container: document.getElementById('lottie-background'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'img/prof.json' // Your local Lottie JSON file
});

var typed = new Typed('.typing', {
    strings: ["A Full Stack Django Developer", "A Backend Engineer", "A Problem Solver"],
    typeSpeed: 80,     // Base typing speed
    backSpeed: 50,     // Base backspacing speed
    loop: true,
    preStringTyped: (arrayPos, self) => {
        let speeds = [80, 60, 100, 70, 90]; // Different speeds to create wave effect
        let randomSpeed = speeds[Math.floor(Math.random() * speeds.length)];
        self.typeSpeed = randomSpeed;
        self.backSpeed = randomSpeed / 1.5; // Slower backspacing for smoother effect
    }
});
gsap.to(".typing", {
    y: 5, 
    duration: 1, 
    repeat: -1, 
    yoyo: true,
    ease: "sine.inOut"
});

window.addEventListener("load", () => {
    document.querySelectorAll(".styled-list li").forEach(li => {
        li.style.opacity = "1";
        li.style.transform = "translateX(0)";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".project-tab-item");
    const projects = document.querySelectorAll(".project-card");

    tabs.forEach(tab => {
        tab.addEventListener("click", function () {
            tabs.forEach(t => t.classList.remove("project-tab-active"));
            this.classList.add("project-tab-active");

            let filter = this.getAttribute("data-filter");
            projects.forEach(project => {
                if (project.classList.contains(filter)) {
                    project.style.display = "block";
                } else {
                    project.style.display = "none";
                }
            });
        });
    });
});