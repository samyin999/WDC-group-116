function display_signup() {
    window.open("https://ide-7ffa2dafa0d84506ac6daba9570f3246-8081.cs50.ws/signup.html");
}

// login function
function login() {

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "user" && password == "user123") {
      alert("User login successful. Welcome!");
      location.href = "user.html";
     }
    else if (username == "manager" && password == "manager123") {
      alert("Venue manager login successful. Welcome!");
      location.href = "manager.html";
    }
    else if (username == "admin" && password == "admin123") {
      alert("Admin login successful. Welcome!");
      location.href = "admin.html";
    }
    else {
      alert("Validation failed. Please re-enter your login details.");
      location.href = "login.html";
    }

    return false;

}

// logout functions

function logout_user() {
  alert("Logged out successfully! We hope you enjoyed our site!");
  window.location.href = "login.html";
}

function logout_manager() {
  alert("Logged out successfully! We hope you enjoyed our site!");
  window.location.href = "login.html";
}

function logout_admin() {
  alert("Logged out successfully! We hope you enjoyed our site!");
  window.location.href = "login.html";
}




