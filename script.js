//    JAVASCRIPT 

/* LOADER */

window.addEventListener("load", () => {

    setTimeout(() => {
        document
            .getElementById("loader")
            .classList.add("hide");
    }, 700);

});


/* MOBILE MENU */

const menuBtn =
    document.getElementById("menuBtn");

const navLinks =
    document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("open");

    menuBtn.textContent =
        navLinks.classList.contains("open") ?
        "✕" :
        "☰";

});


// Close menu after clicking a link

document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("open");

            menuBtn.textContent = "☰";

        });

    });


/*    DARK / LIGHT MODE */

const themeBtn =
    document.getElementById("themeBtn");

const savedTheme =
    localStorage.getItem("portfolio-theme");

if (savedTheme === "light") {

    document.body.classList.add("light");

    themeBtn.textContent = "🌙";

}

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    const isLight =
        document.body.classList.contains("light");

    themeBtn.textContent =
        isLight ? "🌙" : "☀";

    localStorage.setItem(
        "portfolio-theme",
        isLight ? "light" : "dark"
    );

});


/*   HEADER SCROLL  */

const header =
    document.getElementById("header");

const scrollTop =
    document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }


    if (window.scrollY > 500) {
        scrollTop.classList.add("show");
    } else {
        scrollTop.classList.remove("show");
    }

});


/* SCROLL TO TOP */

scrollTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/*  TYPING ANIMATION */

const typingText =
    document.getElementById("typingText");

const words = [
    "Software Developer",
    "Frontend Developer",
    "Creative Coder"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;


function typeEffect() {

    const currentWord =
        words[wordIndex];

    if (!deleting) {

        typingText.textContent =
            currentWord.substring(
                0,
                charIndex + 1
            );

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    } else {

        typingText.textContent =
            currentWord.substring(
                0,
                charIndex - 1
            );

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex =
                (wordIndex + 1) % words.length;

        }

    }

    setTimeout(
        typeEffect,
        deleting ? 50 : 100
    );

}

typeEffect();


/*  SCROLL REVEAL  */

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target
                        .classList
                        .add("active");

                    revealObserver
                        .unobserve(entry.target);

                }

            });

        }, {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/*  SKILL BAR ANIMATION */

const skillBars =
    document.querySelectorAll(".skill-progress");

const skillObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    const width =
                        entry.target
                        .dataset
                        .width;

                    entry.target.style.width =
                        width;

                    skillObserver
                        .unobserve(entry.target);

                }

            });

        }, {
            threshold: .5
        }
    );


skillBars.forEach(bar => {

    skillObserver.observe(bar);

});


/*  ACTIVE NAVIGATION */

const sections =
    document.querySelectorAll("section");

const navigationLinks =
    document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });


    navigationLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {
            link.classList.add("active");
        }

    });

});


/* CONTACT FORM */

const contactForm =
    document.getElementById("contactForm");

contactForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        const button =
            contactForm.querySelector("button");

        button.textContent =
            "Message Sent ✓";

        button.style.background =
            "linear-gradient(135deg,#16a34a,#22c55e)";

        contactForm.reset();

        setTimeout(() => {

            button.textContent =
                "Send Message 🚀";

            button.style.background = "";

        }, 3000);

    }
);





/*  SIMPLE 3D CARD EFFECT */

document
    .querySelectorAll(".project-card")
    .forEach(card => {

        card.addEventListener(
            "mousemove",
            event => {

                const rect =
                    card.getBoundingClientRect();

                const x =
                    event.clientX - rect.left;

                const y =
                    event.clientY - rect.top;

                const centerX =
                    rect.width / 2;

                const centerY =
                    rect.height / 2;

                const rotateX =
                    ((y - centerY) / centerY) * -4;

                const rotateY =
                    ((x - centerX) / centerX) * 4;

                card.style.transform =
                    `perspective(800px)
                             rotateX(${rotateX}deg)
                             rotateY(${rotateY}deg)
                             translateY(-8px)`;

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform =
                    "";

            }
        );

    });