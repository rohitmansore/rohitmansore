
let hr = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("second");

function displayTime() {
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let HRotation = 30 * hh + mm / 2;
    let MRotation = 6 * mm;
    let SRotation = 6 * ss;

    hr.style.transform=`rotate(${HRotation}deg)`;
    min.style.transform=`rotate(${MRotation}deg)`;
    sec.style.transform=`rotate(${SRotation}deg)`;

}

setInterval(displayTime,1000);