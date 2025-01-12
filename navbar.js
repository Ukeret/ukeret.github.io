// Ensure the DOM is fully loaded before executing
document.addEventListener("DOMContentLoaded", function () {
    // Create a navigation element
    const nav = document.createElement("nav");

    // Add navigation content using innerHTML
    nav.innerHTML = `
        <ul style="list-style-type: none; margin: 0; padding: 0; display: flex; background-color: #343a40;">
            <li style="margin: 0; padding: 10px;">
                <a href="index.html" style="color: white; text-decoration: none; padding: 10px;">Home</a>
            </li>
            <li style="margin: 0; padding: 10px;">
                <a href="products.html" style="color: white; text-decoration: none; padding: 10px;">Our Products</a>
            </li>
            <li style="margin: 0; padding: 10px;">
                <a href="about.html" style="color: white; text-decoration: none; padding: 10px;">About Us</a>
            </li>
            <li style="margin: 0; padding: 10px;">
                <a href="contact.html" style="color: white; text-decoration: none; padding: 10px;">Contact</a>
            </li>
        </ul>
    `;

    // Insert the navigation bar at the top of the body
    document.body.insertBefore(nav, document.body.firstChild);
});
