// UK AND ASSOCIATES LLC
// Shared Navigation Bar

document.addEventListener("DOMContentLoaded", function () {

    const nav = document.createElement("nav");

    nav.innerHTML = `
        <a href="index.html">Home</a>
        <a href="services.html">Services</a>
        <a href="gps-tracking.html">GPS Tracking</a>
        <a href="security-cameras.html">Security Cameras</a>
        <a href="computer-services.html">Computer Services</a>
        <a href="networking.html">Networking</a>
        <a href="about.html">About Us</a>
        <a href="contact.html">Contact</a>
    `;

    // Find the header and place navigation directly below it
    const header = document.querySelector("header");

    if (header) {
        header.insertAdjacentElement("afterend", nav);
    } else {
        document.body.insertBefore(nav, document.body.firstChild);
    }

    // Automatically highlight the current page
    let currentPage = window.location.pathname.split("/").pop();

    // GitHub Pages / domain root may not explicitly show index.html
    if (currentPage === "" || currentPage === "/") {
        currentPage = "index.html";
    }

    const links = nav.querySelectorAll("a");

    links.forEach(function (link) {
        const linkPage = link.getAttribute("href");

        if (linkPage === currentPage) {
            link.classList.add("active");
        }
    });

});