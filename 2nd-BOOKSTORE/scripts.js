document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.hash !== "") {
                e.preventDefault();
                const hash = link.hash;
                document.querySelector(hash).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Show/hide search bar on small screens
    const searchButton = document.querySelector('.btn-outline-success');
    const searchInput = document.querySelector('.form-control[type="search"]');

    searchButton.addEventListener('click', (e) => {
        if (window.innerWidth < 768) {
            e.preventDefault();
            if (searchInput.style.display === 'block') {
                searchInput.style.display = 'none';
            } else {
                searchInput.style.display = 'block';
                searchInput.focus();
            }
        }
    });
});
