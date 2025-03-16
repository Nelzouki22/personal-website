document.addEventListener('DOMContentLoaded', () => {
    // Welcome message and view counter
    const viewCountElement = document.getElementById('view-count');
    let viewCount = localStorage.getItem('viewCount') || 0;
    viewCount++;
    localStorage.setItem('viewCount', viewCount);
    viewCountElement.textContent = viewCount;

    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        alert(`Thank you, ${name}! Your message has been received.\n\nEmail: ${email}\nMessage: ${message}`);
    });

    document.getElementById('button1').addEventListener('click', function() {
        window.location.href = 'https://nadiraelzouki.blogspot.com/';
    });

    document.getElementById('button2').addEventListener('click', function() {
        window.location.href = 'https://www.youtube.com/@nadirelzouki4529';
    });

    document.getElementById('button3').addEventListener('click', function() {
        window.location.href = 'https://github.com/Nelzouki22';
    });

    document.getElementById('button4').addEventListener('click', function() {
        window.location.href = 'https://www.linkedin.com/in/nadir-elzouki-40679a1a9/';
    });

    // Toggle navigation menu
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");
    
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Filter projects by category
    function filterProjects(category) {
        document.querySelectorAll(".project").forEach(project => {
            if (category === "all" || project.classList.contains(category)) {
                project.style.display = "block";
            } else {
                project.style.display = "none";
            }
        });
    }
    document.querySelectorAll(".filter-btn").forEach(button => {
        button.addEventListener("click", function() {
            filterProjects(this.dataset.category);
        });
    });

    // Lightbox effect for project images
    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    document.body.appendChild(lightbox);
    document.querySelectorAll(".project img").forEach(image => {
        image.addEventListener("click", function() {
            lightbox.classList.add("active");
            const img = document.createElement("img");
            img.src = this.src;
            while (lightbox.firstChild) {
                lightbox.removeChild(lightbox.firstChild);
            }
            lightbox.appendChild(img);
        });
    });
    lightbox.addEventListener("click", () => {
        lightbox.classList.remove("active");
    });

    // Form validation for contact form
    const contactForm = document.querySelector("#contact form");
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.querySelector("#name");
        const email = document.querySelector("#email");
        const message = document.querySelector("#message");
        
        if (!name.value || !email.value || !message.value) {
            alert("Please fill out all fields before submitting.");
            return;
        }
        
        alert("Your message has been sent successfully!");
        contactForm.reset();
    });
});