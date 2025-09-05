document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Feedback button functionality
    const feedbackButton = document.getElementById('feedback-button');
    if (feedbackButton) {
        feedbackButton.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default link behavior
            alert('Thank you for wanting to give feedback! Please send an email to thapachhetrirohan@gmail.com.');
            // In a real application, you might open a modal or navigate to a feedback form.
        });
    }

    // Search bar functionality (example: logs to console)
    const searchButton = document.querySelector('.search-button');
    const searchInput = document.querySelector('.search-input');

    if (searchButton && searchInput) {
        searchButton.addEventListener('click', () => {
            const searchTerm = searchInput.value.trim();
            if (searchTerm) {
                console.log('Searching for:', searchTerm);
                alert(`Simulating search for: "${searchTerm}"`);
                // In a real application, you would implement actual search logic here.
            } else {
                alert('Please enter a search term.');
            }
        });

        // Allow search on pressing Enter key
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchButton.click(); // Trigger the click event on the search button
            }
        });
    }

    // Basic animation for content sections on scroll (optional)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.add('fade-in-on-scroll');
        sectionObserver.observe(section);
    });
});