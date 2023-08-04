document.addEventListener("DOMContentLoaded", function () {
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileClose = document.querySelector('.mobile-close');
    const mobileNavigation = document.querySelector('.mobile-navigation');

    // Function to show the mobile navigation
    function showMobileNav() {
        mobileNavigation.classList.add("active");
        mobileClose.classList.add("active");
    }

    // Function to hide the mobile navigation
    function hideMobileNav() {
        mobileNavigation.classList.remove("active");
        mobileClose.classList.remove("active");
    }

    // Event listener to show the mobile navigation when mobileMenu is clicked
    mobileMenu.addEventListener("click", showMobileNav);

    // Event listener to hide the mobile navigation when mobileClose is clicked
    mobileClose.addEventListener("click", hideMobileNav);
});
