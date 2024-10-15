document.querySelector(".form-btn").addEventListener("click", function () {

    let name = document.getElementById("name").value;
    let email = document.getElementById("mail").value;
    let phone = document.getElementById("number").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    let guests = document.getElementById("select").value;

        if (name === "" || email === "" || phone === "" || date === "" || time === "" || guests === "") {
            alert("You have not filled in all the information.");
        } else {

            localStorage.setItem("name", name);
            localStorage.setItem("email", email);
            localStorage.setItem("phone", phone);
            localStorage.setItem("date", date);
            localStorage.setItem("time", time);
            localStorage.setItem("guests", guests);
            
            
            alert("Booking successful! Your details have been submitted.");
        }
    }    
    );
    
    // Optional: You can also pre-fill the form if data exists in local storage
    window.onload = function () {
        if (localStorage.getItem("name")) {
            document.getElementById("name").value = localStorage.getItem("name");
        }
        if (localStorage.getItem("email")) {
            document.getElementById("mail").value = localStorage.getItem("email");
        }
        if (localStorage.getItem("phone")) {
            document.getElementById("number").value = localStorage.getItem("phone");
        }
        if (localStorage.getItem("date")) {
            document.getElementById("date").value = localStorage.getItem("date");
        }
        if (localStorage.getItem("time")) {
            document.getElementById("time").value = localStorage.getItem("time");
        }
        if (localStorage.getItem("guests")) {
            document.querySelector("select").value = localStorage.getItem("guests");
        }
    }




// Menu button javascript
let appebtn = document.getElementById('appe-btn') 
let susbtn = document.getElementById('sus-btn') 
let noodbtn = document.getElementById('nood-btn') 
let frybtn = document.getElementById('fri-btn') 
let desbtn = document.getElementById('des-btn') 

let appetiz = document.getElementById('appetizer')
let sushi = document.getElementById('sushi')
let Noodles = document.getElementById('Noodles')
let fried = document.getElementById('fried')
let desert = document.getElementById('deserts')

appebtn.addEventListener('click', () => {
    appetiz.style.display="block";
    sushi.style.display="none";
    fried.style.display="none";
    Noodles.style.display="none";
    desert.style.display="none";
})
susbtn.addEventListener('click', () => {
    appetiz.style.display="none";
    sushi.style.display="block";
    fried.style.display="none";
    Noodles.style.display="none";
    desert.style.display="none";
})
noodbtn.addEventListener('click', () => {
    appetiz.style.display="none";
    sushi.style.display="none";
    fried.style.display="none";
    Noodles.style.display="block";
    desert.style.display="none";
})
frybtn.addEventListener('click', () => {
    appetiz.style.display="none";
    sushi.style.display="none";
    fried.style.display="block";
    Noodles.style.display="none";
    desert.style.display="none";
})
desbtn.addEventListener('click', () => {
    appetiz.style.display="none";
    sushi.style.display="none";
    fried.style.display="none";
    Noodles.style.display="none";
    desert.style.display="block";
})

let home = document.getElementById('home').addEventListener('click', () => {
    setTimeout(function() {
        window.location.href = "index.html";
    }, 3000);
    
})
let about = document.getElementById('about').addEventListener('click', () => {
    setTimeout(function() {
        window.location.href = "AboutUs.html";
    }, 3000);
})
let menu = document.getElementById('menu').addEventListener('click', () => {
    setTimeout(function() {
        window.location.href = "menu.html";
    }, 3000);
})
let chefs = document.getElementById('chefs').addEventListener('click', () => {
    setTimeout(function() {
        window.location.href = "chefs.html";
    }, 3000);
})
let booking = document.getElementById('booking').addEventListener('click', () => {
    setTimeout(function() {
        window.location.href = "booking.html";
    }, 3000);
})
let contact = document.getElementById('contact').addEventListener('click', () => {
    setTimeout(function() {
        window.location.href = "ContactUs.html";
    }, 3000);
})
let gallery = document.getElementById('gallery').addEventListener('click', () => {
    setTimeout(function() {
        window.location.href = "gallery.html";
    }, 3000);
})

let subscribe = document.getElementById('subscribe').value;
let subtn = document.getElementById('sub-btn')

subtn.addEventListener('click', () => {
    if(subscribe !== ''){
        alert("You Are Now Subscribed To News Letter")
    }
    else{
        alert("Enter The Email To Send News Letter")
    }
})