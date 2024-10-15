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
let appebtn = document.getElementById('appe-btn').addEventListener('click', () => {
    document.querySelectorAll('.appet').forEach(item => item.style.display = "block");
    document.querySelectorAll('.sushi, .nood, .fried, .desert').forEach(item => item.style.display = "none");
});

let susbtn = document.getElementById('sus-btn').addEventListener('click', () => {
    document.querySelectorAll('.sushi').forEach(item => item.style.display = "block");
    document.querySelectorAll('.appet, .nood, .fried, .desert').forEach(item => item.style.display = "none");
});

let noodbtn = document.getElementById('nood-btn').addEventListener('click', () => {
    document.querySelectorAll('.nood').forEach(item => item.style.display = "block");
    document.querySelectorAll('.appet, .sushi, .fried, .desert').forEach(item => item.style.display = "none");
});

let friedbtn = document.getElementById('fri-btn').addEventListener('click', () => {
    document.querySelectorAll('.fried').forEach(item => item.style.display = "block");
    document.querySelectorAll('.appet, .sushi, .nood, .desert').forEach(item => item.style.display = "none");
});

let desertbtn = document.getElementById('des-btn').addEventListener('click', () => {
    document.querySelectorAll('.desert').forEach(item => item.style.display = "block");
    document.querySelectorAll('.appet, .sushi, .nood, .fried').forEach(item => item.style.display = "none");
});

// Add similar event listeners for 'fried' and 'desert' buttons as well
