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

    document.getElementById('userHome').style.display = "block";
}

function checkInPress() {
    document.getElementById('checkInActive').style.display = "block";
    document.getElementById('checkInInactive').style.display = "none";

    document.getElementById('userHome').style.display = "none";
    document.getElementById('userCheckIn').style.disply = "block";
}

function mapPress() {

}

