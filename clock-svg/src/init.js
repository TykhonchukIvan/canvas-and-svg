const clock = document.getElementById("clock");
clock.addEventListener("load", function (evt) {
    clockSvg(evt);
});

function clockSvg(evt) {
    let secondsLine = document.querySelector("#secondsLine");
    let minutesLine = document.querySelector("#minutesLine");
    let hoursLine = document.querySelector("#hoursLine");
    
    let date, seconds, minutes, hours, sec, minute, hour;

    setInterval(function () {
        date = new Date();
        seconds = date.getSeconds();
        minutes = date.getMinutes();
        hours = date.getHours();
        sec = 180 + seconds * 6;
        minute = 180 + minutes * 6;
        hour = 180 + 360 / 12 * (hours) + minute / 60;
        secondsLine.setAttribute('transform', ` translate(300,300) rotate(${sec},0,0)`);
        minutesLine.setAttribute('transform', ` translate(300,300) rotate(${minute},0,0)`);
        hoursLine.setAttribute('transform', ` translate(300,300) rotate(${hour},0,0)`);
    }, 1000);

}