document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    const tabContents = document.querySelectorAll(".tab-content");

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default anchor behavior

            // Get the target section ID from the href attribute
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Hide all sections
                tabContents.forEach(section => section.style.display = "none");

                // Show the selected section
                targetSection.style.display = "block";

                // Remove 'active' class from all nav links
                navLinks.forEach(link => link.classList.remove("active"));

                // Add 'active' class to the clicked nav link
                this.classList.add("active");
            }
        });
    });

    // Ensure only the first section is visible on page load
    tabContents.forEach(section => section.style.display = "none");
    document.getElementById("home").style.display = "block";
});
