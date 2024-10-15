let home = document.getElementById('home').addEventListener('click', () => {
    window.location.href="index.html";
})
let about = document.getElementById('about').addEventListener('click', () => {
    window.location.href="AboutUs.html";
})
let menu = document.getElementById('menu').addEventListener('click', () => {
    window.location.href="menu.html";
})
let chefs = document.getElementById('chefs').addEventListener('click', () => {
    window.location.href="chefs.html";
})
let booking = document.getElementById('booking').addEventListener('click', () => {
    window.location.href="booking.html";
})
let contact = document.getElementById('contact').addEventListener('click', () => {
    window.location.href="contactUs.html";
})
let gallery = document.getElementById('gallery').addEventListener('click', () => {
    window.location.href="Gallery.html";
})

function sendEmail() {
    // Log to check if function is triggered
    console.log("sendEmail function triggered");

    const name = document.getElementById('namee').value;
    const email = document.getElementById('email').value;
    const query = document.getElementById('query').value;

    // Check if values are being captured
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Query:", query);

    if (name && email && query) {
        // Create mailto link
        alert("Your Query Has Been Submitted")
    } else {
        alert("Please fill all the fields before submitting.");
    }
}