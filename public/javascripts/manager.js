function homePress() {
    document.getElementById('logActive').style.display = "none";
    document.getElementById('logInactive').style.display = "block";
    document.getElementById('manageActive').style.display = "none";
    document.getElementById('manageInactive').style.display = "block";
    document.getElementById('accountActive').style.display = "none";
    document.getElementById('accountInactive').style.display = "block";

    document.getElementById('managerHome').style.display = "block";
    document.getElementById('managerLog').style.display = "none";
    document.getElementById('managerManage').style.display = "none";
    document.getElementById('managerAccount').style.display = "none";
}

function logPress() {
    document.getElementById('logActive').style.display = "block";
    document.getElementById('logInactive').style.display = "none";
    document.getElementById('manageActive').style.display = "none";
    document.getElementById('manageInactive').style.display = "block";
    document.getElementById('accountActive').style.display = "none";
    document.getElementById('accountInactive').style.display = "block";

    document.getElementById('managerHome').style.display = "none";
    document.getElementById('managerLog').style.display = "block";
    document.getElementById('managerManage').style.display = "none";
    document.getElementById('managerAccount').style.display = "none";
}

function managePress() {
    document.getElementById('logActive').style.display = "none";
    document.getElementById('logInactive').style.display = "block";
    document.getElementById('manageActive').style.display = "block";
    document.getElementById('manageInactive').style.display = "none";
    document.getElementById('accountActive').style.display = "none";
    document.getElementById('accountInactive').style.display = "block";

    document.getElementById('managerHome').style.display = "none";
    document.getElementById('managerLog').style.display = "none";
    document.getElementById('managerManage').style.display = "block";
    document.getElementById('managerAccount').style.display = "none";
}

function accountPress() {
    document.getElementById('logActive').style.display = "none";
    document.getElementById('logInactive').style.display = "block";
    document.getElementById('manageActive').style.display = "none";
    document.getElementById('manageInactive').style.display = "block";
    document.getElementById('accountActive').style.display = "block";
    document.getElementById('accountInactive').style.display = "none";

    document.getElementById('managerHome').style.display = "none";
    document.getElementById('managerLog').style.display = "none";
    document.getElementById('managerManage').style.display = "none";
    document.getElementById('managerAccount').style.display = "block";
}

function general() {
    document.getElementById('generalOptions').style.display = "block";
    document.getElementById('passwordOptions').style.display = "none";
}

function changePassword() {
    document.getElementById('generalOptions').style.display = "none";
    document.getElementById('passwordOptions').style.display = "block";
}