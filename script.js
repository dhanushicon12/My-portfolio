/* =====================================================
   PRELOADER
===================================================== */

window.addEventListener("load", () => {

    const preloader =
        document.querySelector(".preloader");

    setTimeout(() => {

        preloader.style.opacity = "0";

        setTimeout(() => {

            preloader.style.display = "none";

        }, 500);

    }, 700);

});


/* =====================================================
   TYPING EFFECT
===================================================== */

const typingElement =
    document.getElementById("typing");

const roles = [
    "Python Developer",
    "Backend Developer",
    "Full Stack Developer",
    "Data Science Enthusiast",
    "Software Engineer"
];

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;


function typeEffect() {

    const currentRole =
        roles[roleIndex];

    if (!deleting) {

        typingElement.textContent =
            currentRole.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;

        if (
            characterIndex ===
            currentRole.length
        ) {

            deleting = true;

            setTimeout(
                typeEffect,
                1500
            );

            return;

        }

    } else {

        typingElement.textContent =
            currentRole.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            roleIndex =
                (roleIndex + 1)
                % roles.length;

        }

    }

    const speed =
        deleting ? 50 : 90;

    setTimeout(
        typeEffect,
        speed
    );
}

typeEffect();


/* =====================================================
   NAVBAR
===================================================== */

const navbar =
    document.querySelector(".navbar");

window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 50) {

            navbar.classList.add(
                "scrolled"
            );

        } else {

            navbar.classList.remove(
                "scrolled"
            );

        }

    }
);


/* =====================================================
   MOBILE MENU
===================================================== */

const menuButton =
    document.getElementById(
        "menuButton"
    );

const mobileMenu =
    document.getElementById(
        "mobileMenu"
    );


menuButton.addEventListener(
    "click",
    () => {

        mobileMenu.classList.toggle(
            "open"
        );

        const icon =
            menuButton.querySelector(
                "i"
            );

        if (
            mobileMenu.classList.contains(
                "open"
            )
        ) {

            icon.className =
                "fa-solid fa-xmark";

        } else {

            icon.className =
                "fa-solid fa-bars";

        }

    }
);


document
    .querySelectorAll(".mobile-menu a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                mobileMenu.classList.remove(
                    "open"
                );

                menuButton
                    .querySelector("i")
                    .className =
                    "fa-solid fa-bars";

            }
        );

    });


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList.add(
                        "visible"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(
    element => {

        revealObserver.observe(
            element
        );

    }
);


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections =
    document.querySelectorAll(
        "section[id]"
    );

const navLinks =
    document.querySelectorAll(
        ".nav-link"
    );


window.addEventListener(
    "scroll",
    () => {

        let current = "";

        sections.forEach(
            section => {

                const sectionTop =
                    section.offsetTop;

                if (
                    window.scrollY >=
                    sectionTop - 180
                ) {

                    current =
                        section.getAttribute(
                            "id"
                        );

                }

            }
        );


        navLinks.forEach(
            link => {

                link.classList.remove(
                    "active"
                );

                if (
                    link.getAttribute(
                        "href"
                    ) === `#${current}`
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            }
        );

    }
);


/* =====================================================
   BACK TO TOP
===================================================== */

const backToTop =
    document.getElementById(
        "backToTop"
    );


window.addEventListener(
    "scroll",
    () => {

        if (
            window.scrollY > 500
        ) {

            backToTop.classList.add(
                "show"
            );

        } else {

            backToTop.classList.remove(
                "show"
            );

        }

    }
);


backToTop.addEventListener(
    "click",
    () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm =
    document.getElementById(
        "contactForm"
    );

const formMessage =
    document.getElementById(
        "formMessage"
    );


contactForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();

        formMessage.textContent =
            "Thank you! Your message has been received.";

        contactForm.reset();

    }
);


/* =====================================================
   CURRENT YEAR
===================================================== */

document.getElementById(
    "year"
).textContent =
    new Date().getFullYear();