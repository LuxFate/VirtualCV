let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
const headerHeight = document.querySelector('header').offsetHeight;

// Function to handle smooth scrolling to a section
const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
        const sectionTop = section.offsetTop - headerHeight; // Adjust for header height
        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
        });
    }
};

// Attach click event listeners to navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault(); // Prevent default anchor behavior for internal links
            scrollToSection(href); // Smooth scroll to section
        }
    });
});

// Highlight active navigation link based on scroll position on the website
window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - headerHeight; // Adjust for header height
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

