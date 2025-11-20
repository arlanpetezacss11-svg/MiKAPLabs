let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Check if menuIcon exists before adding event listener
if (menuIcon) {
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x'); 
        navbar.classList.toggle('active'); 
    };
}

// Active navigation link on scroll
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navbar a');

// Set active link on page load
function setActiveLink() {
    let scrollPosition = window.scrollY;
    
    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if (scrollPosition >= offset && scrollPosition < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            
            const activeLink = document.querySelector('.navbar a[href*="#' + id + '"]');
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}

// Call on page load
document.addEventListener('DOMContentLoaded', setActiveLink);

// Call on scroll with throttling for better performance
let isScrolling = false;
window.addEventListener('scroll', () => {
    if (!isScrolling) {
        isScrolling = true;
        setTimeout(() => {
            setActiveLink();
            isScrolling = false;
        }, 100);
    }
});