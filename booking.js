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
    });
    
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