/* ================================
   MOBILE MENU
================================ */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


/* ================================
   CLOSE MENU AFTER CLICK
================================ */

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((item) => {

    item.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


/* ================================
   SCROLL TO TOP BUTTON
================================ */

const topBtn = document.getElementById("topBtn");

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* ================================
   SHOW/HIDE TOP BUTTON
================================ */

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.opacity = "1";
        topBtn.style.pointerEvents = "auto";

    } else {

        topBtn.style.opacity = "0";
        topBtn.style.pointerEvents = "none";

    }

});


/* ================================
   SCROLL REVEAL
================================ */

const revealElements = document.querySelectorAll(
    ".skill-card, .project-card, .certificate-card, .timeline-item, .about-container, .contact-container"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach((element) => {

    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "all 0.7s ease";

    observer.observe(element);

});


/* ================================
   ACTIVE NAVIGATION
================================ */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navItems.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {

            link.classList.add("active");

        }

    });

});