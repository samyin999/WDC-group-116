// This file contains all of our AJAX requests

// var QRCode = require("qrcode");

// AJAX for add user
function add_user() {

    var user = [
        {
            first_name: document.getElementById('firstname').value,
            last_name: document.getElementById('lastname').value,
            date_of_birth: document.getElementById('birthdate').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            mobileNumber: document.getElementById('mob_number').value,
            accountCreationTime: new Date(),
        },

    ];


    var xhttp = new XMLHttpRequest();

    xhttp.open("POST", "/register_user", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(user));

}

// AJAX for add venue manager
function add_venue_manager() {

    var venue_manager = [
        {
            first_name: document.getElementById('firstname').value,
            last_name: document.getElementById('lastname').value,
            date_of_birth: document.getElementById('birthdate').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            mobileNumber: document.getElementById('mob_number').value,
            accountCreationTime: new Date(),
        },
    ];

    var xhttp = new XMLHttpRequest();

    xhttp.open("POST", "/register_venue_manager", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(venue_manager));

}

// AJAX for add admin
function add_admin() {

    var admin = [
        {
            first_name: document.getElementById('firstname').value,
            last_name: document.getElementById('lastname').value,
            date_of_birth: document.getElementById('birthdate').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            mobileNumber: document.getElementById('mob_number').value,
            accountCreationTime: new Date(),
        },
    ];

    var xhttp = new XMLHttpRequest();

    xhttp.open("POST", "/register_admin", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(admin));

}

// add venue
function add_venue1() {

    var venue = [
        {
            venue_name: document.getElementById('addvenuename').value,
            address1: document.getElementById('addvenueaddress').value,
            address2: document.getElementById('ad2').value,
            suburb: document.getElementById('suburb').value,
            postcode: document.getElementById('postcode').value,
        },
    ];
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "/register_venue", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(venue));
}

// AJAX for update user info
function update_user_details() {

    var updated_user = [
        {
            first_name: document.getElementById('inputFirstname').value,
            last_name: document.getElementById('inputLastname').value,
            date_of_birth: document.getElementById('inputDoB').value,
            email: document.getElementById('inputEmail4').value,
            address1: document.getElementById('inputAddress').value,
            address2: document.getElementById('inputAddress2').value,
            suburb: document.getElementById('inputCity').value,
            postcode: document.getElementById('inputZip').value
        },
    ];

    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "/update_user_details", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(updated_user));

}

// AJAX for update manager
function update_manager() {

    var updated_manager = [
        {
            first_name: document.getElementById('inputFirstname').value,
            last_name: document.getElementById('inputLastname').value,
            date_of_birth: document.getElementById('inputDoB').value,
            phone_number: document.getElementById('inputDoB').value,
            email: document.getElementById('inputEmail4').value,
        },
    ];

    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "/update_manager_details", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(updated_manager));

}

// AJAX for get user
function get_user() {

    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", "/register_user", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(user));

}

// AJAX for checkin
function check_in() {

    var xhttp = new XMLHttpRequest();

    var checkin = [
        {
            datetime: new Date(),
            venue_id: document.getElementById('venue_id').value,
            user: 456
        },
    ];

    xhttp.open("POST", "/checkin", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(checkin));

}

// Google Sign In
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}

function display_users() {

    const person = {
        name: "John",
        age: 30,
        city: "New York"
    };

    document.getElementById("demo").innerHTML = person.name;
    document.getElementById("demo2").innerHTML = person.age;
    document.getElementById("demo3").innerHTML = person.city;


}

function display_date() {
    var d = new Date();
    //document.getElementById("admin_date").innerText = "COVID-19 Data for " + new Date();
    return d;
}

function update_venue_manager() {
    alert("Account updated successfully!");
    window.location.href = "manager.html";
}

function change_password() {
    document.getElementById('account-change-password').style.display = "block";
}

function main_menu() {
    window.location.href = "manager.html";
}

function display_menu() {
    var original = document.getElementById('venue_name').value;
    document.getElementById('name_venue').innerHTML = original;
}

function display_venues() {

    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", "/get_venue", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(venue));

}

function update_admin_account() {

    var xhttp = new XMLHttpRequest();

    var updated_admin = [
        {
            first_name: document.getElementById('inputFirstname').value,
            last_name: document.getElementById('inputLastname').value,
            date_of_birth: document.getElementById('inputDoB').value,
            email: document.getElementById('inputPhone').value,
            mobileNumber: document.getElementById('inputEmail4').value,
        },
    ];

    xhttp.open("POST", "/admin_update", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(updated_admin));

}

// user check-in object

var checkin = {
    datetime: new Date(),
    venue: 'KFC',
    user: 'Antony'
};

var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

var venue = {
    name: "Woolworths",
    long: 138.6172,
    lat: -34.8956,
    total_cases: 5,
    contact_no: 82156911,
    address: {
        addressLine1: "104",
        addressLine2: "Walkerville Terrace",
        suburb: "Walkerville",
        postcode: 5081
    },
    recent_visits: {
        user: null,
        datetime: today
    }
};



