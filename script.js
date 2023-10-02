var countDate = new Date('Jan 1, 2024 00:00:00').getTime();

function launch(){
    var now = new Date().getTime();
    var gap = countDate - now;

    //Counter seconds, minutes, hours, days and hours
    var second = 1000;
    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 24;
    
    var days = Math.floor(gap / (day));
    var hours = Math.floor((gap % (day)) / (hour));
    var minutes = Math.floor((gap % (hour)) / (minute));
    var seconds = Math.floor((gap % (minute)) / (second));

    document.getElementById('dias').innerText = days;
    document.getElementById('horas').innerText = hours;
    document.getElementById('minutos').innerText = minutes;
    document.getElementById('segundos').innerText = seconds;
}

setInterval(function(){
    launch();
}, 1000);
