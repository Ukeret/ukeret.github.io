document.addEventListener("DOMContentLoaded", function () {
    // Add navigation bar dynamically
    const nav = document.createElement("nav");
    nav.innerHTML = `
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="products.html">Our Products</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
    `;
    document.body.insertBefore(nav, document.body.firstChild);

    // Add product gallery dynamically
    const productGallery = document.getElementById("product-gallery");
    const totalImages = 54; // Total number of images
    const imageFolder = "images/projectfly/"; // Adjust folder path as needed

    for (let i = 1; i <= totalImages; i++) {
        const productItem = document.createElement("div");
        productItem.classList.add("product-item");

        const img = document.createElement("img");

        // Paths for WebP and JPG images
        const webpPath = `${imageFolder}product${i}.webp`;
        const jpgPath = `${imageFolder}product${i}.jpg`;

        // Set WebP as default and fallback to JPG
        img.src = webpPath;
        img.onerror = function () {
            img.src = jpgPath; // If WebP fails, use JPG
        };

        img.alt = `Product ${i}`;

        productItem.appendChild(img);
        productGallery.appendChild(productItem);
    }
});

});
