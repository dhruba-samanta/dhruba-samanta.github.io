document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll('.navbar a');
    const tabContents = document.querySelectorAll('.tab-content');

    // Ensure only the first tab content is visible initially
    tabContents.forEach(content => content.style.display = 'none');
    if (tabContents.length > 0) tabContents[0].style.display = 'block';

    tabs.forEach(tab => {
        tab.addEventListener('click', function (e) {
            e.preventDefault();

            // Hide all tab contents
            tabContents.forEach(content => content.style.display = 'none');

            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));

            // Add active class to clicked tab
            this.classList.add('active');

            // Get target content and show it
            const targetId = this.getAttribute('href');
            const targetContent = document.querySelector(targetId);
            if (targetContent) {
                targetContent.style.display = 'block';
            }
        });
    });
});
