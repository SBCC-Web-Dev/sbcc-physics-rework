
    const toggleButton = document.getElementById('darkModeToggle');

    // Check if dark mode was previously enabled
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        document.querySelector('.navbar').classList.add('dark-mode');
        toggleButton.textContent = 'Light Mode';
    }

    toggleButton.addEventListener('click', () => {
        const body = document.body;
        const navbar = document.querySelector('.navbar');

        // Toggle dark mode
        body.classList.toggle('dark-mode');
        navbar.classList.toggle('dark-mode');

        // Save preference in localStorage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
            toggleButton.textContent = 'Light Mode';
        } else {
            localStorage.setItem('darkMode', 'disabled');
            toggleButton.textContent = 'Dark Mode';
        }
    });


