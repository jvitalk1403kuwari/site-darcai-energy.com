// JavaScript for interactivity and animations

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for navbar links
    const navbarLinks = document.querySelectorAll('.navbar a');

    navbarLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header animation on scroll
    const heroSection = document.querySelector('.hero');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            heroSection.style.opacity = '0.8';
        } else {
            heroSection.style.opacity = '1';
        }
    });

    // Interactive button hover effect
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.transform = 'scale(1.1)';
        });

        button.addEventListener('mouseout', () => {
            button.style.transform = 'scale(1)';
        });
    });

    // Lazy load images for projects
    const projectImages = document.querySelectorAll('.project-item img');

    const loadImage = (image) => {
        const src = image.getAttribute('data-src');
        if (src) {
            image.src = src;
            image.removeAttribute('data-src');
        }
    };

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                loadImage(entry.target);
                observer.unobserve(entry.target);
            }
        });
    });

    projectImages.forEach(image => {
        imageObserver.observe(image);
    });
});
