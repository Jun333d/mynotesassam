function toggleDropdown(id) {
  const dropdown = document.getElementById(id);

  // Check if the dropdown is already open
  if (dropdown.style.maxHeight && dropdown.style.maxHeight !== "0px") {
      dropdown.style.maxHeight = "0px"; // Close the dropdown
  } else {
      dropdown.style.maxHeight = dropdown.scrollHeight + "px"; // Open the dropdown
  }
}
//dark mode
// Dark Mode Toggle
// Get the elements for the dark mode toggle
// Function to set the theme
function setTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }
}

// Check stored theme on page load and apply it
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);

    // Get the icons
    const lightModeIcon = document.getElementById('lightModeIcon');
    const darkModeIcon = document.getElementById('darkModeIcon');

    // Set the correct icon visibility based on the theme
    if (savedTheme === 'dark') {
        lightModeIcon.style.display = 'none';
        darkModeIcon.style.display = 'block';
    } else {
        lightModeIcon.style.display = 'block';
        darkModeIcon.style.display = 'none';
    }

    // Add event listeners to toggle theme
    lightModeIcon.addEventListener('click', () => {
        setTheme('dark');
        lightModeIcon.style.display = 'none';
        darkModeIcon.style.display = 'block';
    });

    darkModeIcon.addEventListener('click', () => {
        setTheme('light');
        lightModeIcon.style.display = 'block';
        darkModeIcon.style.display = 'none';
    });
});


//burger
// JavaScript for toggling the hamburger menu
document.addEventListener('DOMContentLoaded', () => {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const navLinks = document.querySelector('.nav-links');

  // Toggle menu visibility on hamburger menu click
  hamburgerMenu.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      hamburgerMenu.classList.toggle('active');
  });

  // Close the menu if clicking anywhere outside
  document.addEventListener('click', (e) => {
      if (!hamburgerMenu.contains(e.target) && !navLinks.contains(e.target)) {
          navLinks.classList.remove('active');
          hamburgerMenu.classList.remove('active');
      }
  });
});
