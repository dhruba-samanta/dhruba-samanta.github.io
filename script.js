document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    const tabContents = document.querySelectorAll(".tab-content");

    // Function to hide all sections and remove active classes
    function hideAllSections() {
        tabContents.forEach(section => section.classList.remove("active"));
        navLinks.forEach(link => link.classList.remove("active"));
    }

    // Function to show the target section
    function showSection(targetId) {
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add("active");
        }
    }

    // Set up click event listeners for each navigation link
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default anchor behavior

            // Get the target section ID from the href attribute
            const targetId = this.getAttribute("href").substring(1);

            // Hide all sections and remove active class from all links
            hideAllSections();

            // Show the selected section and add active class to the clicked link
            showSection(targetId);
            this.classList.add("active");
        });
    });

    // Initialize the first tab as active on page load
    if (navLinks.length > 0) {
        const firstLink = navLinks[0]; // Assuming the first nav link corresponds to the first section
        const firstSectionId = firstLink.getAttribute("href").substring(1);
        
        hideAllSections(); // Ensure all sections are hidden
        showSection(firstSectionId); // Show the first section
        firstLink.classList.add("active"); // Highlight the first nav link
    }
});
