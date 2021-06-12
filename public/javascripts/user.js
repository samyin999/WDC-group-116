function getDate() {
    document.getElementById("current_time").innerHTML = new Date();
}

// function appendDate() {
//     var currentDate = new Date();
//     let appendTarget = document.getElementById("append_time").innerHTML;
//     appendTarget.append(currentDate);
// }

function homePress() {
    document.getElementById('checkInActive').style.display = "none";
    document.getElementById('checkInInactive').style.display = "block";
    document.getElementById('mapActive').style.display = "none";
    document.getElementById('mapInactive').style.display = "block";
    document.getElementById('historyActive').style.display = "none";
    document.getElementById('historyInactive').style.display = "block";
    document.getElementById('accountActive').style.display = "none";
    document.getElementById('accountInactive').style.display = "block";

    document.getElementById('userHome').style.display = "block";
    document.getElementById('userCheckIn').style.display = "none";
    document.getElementById('userMap').style.display = "block";
    document.getElementById('userCheckHistory').style.display = "none";
    document.getElementById('userAccount').style.display = "none";
}

function checkInPress() {
    document.getElementById('checkInActive').style.display = "block";
    document.getElementById('checkInInactive').style.display = "none";
    document.getElementById('mapActive').style.display = "none";
    document.getElementById('mapInactive').style.display = "block";
    document.getElementById('historyActive').style.display = "none";
    document.getElementById('historyInactive').style.display = "block";
    document.getElementById('accountActive').style.display = "none";
    document.getElementById('accountInactive').style.display = "block";

    document.getElementById('userHome').style.display = "none";
    document.getElementById('userCheckIn').style.display = "block";
    document.getElementById('userMap').style.display = "none";
    document.getElementById('userCheckHistory').style.display = "none";
    document.getElementById('userAccount').style.display = "none";
}

function mapPress() {
    document.getElementById('checkInActive').style.display = "none";
    document.getElementById('checkInInactive').style.display = "block";
    document.getElementById('mapActive').style.display = "block";
    document.getElementById('mapInactive').style.display = "none";
    document.getElementById('historyActive').style.display = "none";
    document.getElementById('historyInactive').style.display = "block";
    document.getElementById('accountActive').style.display = "none";
    document.getElementById('accountInactive').style.display = "block";

    document.getElementById('userHome').style.display = "none";
    document.getElementById('userCheckIn').style.display = "none";
    document.getElementById('userMap').style.display = "block";
    document.getElementById('userCheckHistory').style.display = "none";
    document.getElementById('userAccount').style.display = "none";
}

function historyPress() {
    document.getElementById('checkInActive').style.display = "none";
    document.getElementById('checkInInactive').style.display = "block";
    document.getElementById('mapActive').style.display = "none";
    document.getElementById('mapInactive').style.display = "block";
    document.getElementById('historyActive').style.display = "block";
    document.getElementById('historyInactive').style.display = "none";
    document.getElementById('accountActive').style.display = "none";
    document.getElementById('accountInactive').style.display = "block";

    document.getElementById('userHome').style.display = "none";
    document.getElementById('userCheckIn').style.display = "none";
    document.getElementById('userMap').style.display = "none";
    document.getElementById('userCheckHistory').style.display = "block";
    document.getElementById('userAccount').style.display = "none";
}

function accountPress() {
    document.getElementById('checkInActive').style.display = "none";
    document.getElementById('checkInInactive').style.display = "block";
    document.getElementById('mapActive').style.display = "none";
    document.getElementById('mapInactive').style.display = "block";
    document.getElementById('historyActive').style.display = "none";
    document.getElementById('historyInactive').style.display = "block";
    document.getElementById('accountActive').style.display = "block";
    document.getElementById('accountInactive').style.display = "none";

    document.getElementById('userHome').style.display = "none";
    document.getElementById('userCheckIn').style.display = "none";
    document.getElementById('userMap').style.display = "none";
    document.getElementById('userCheckHistory').style.display = "none";
    document.getElementById('userAccount').style.display = "block";
}

function getlocation() {
 var location = document.getElementById("venue_id").value;
  document.getElementById("confirmation").innerHTML = "Check in to " + location;
}

function general() {
    document.getElementById('generalOptions').style.display = "block";
    document.getElementById('passwordOptions').style.display = "none";
}

function changePassword() {
    document.getElementById('generalOptions').style.display = "none";
    document.getElementById('passwordOptions').style.display = "block";
}