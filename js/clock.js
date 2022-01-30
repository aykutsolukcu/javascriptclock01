let userName = prompt("Lütfen Adınızı Giriniz : ") ;
let myName = document.querySelector("#myName") ;
myName.innerHTML = `${userName}` ;


let myClock = document.querySelector("#myClock") ;
function showTime() {
    let now = new Date();

    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    let day = now.getDay();

    hour = (hour < 10) ? "0" + hour : hour; // hour 10 dan küçükse 0+hour değilse sadece hour
    minute = (minute < 10) ? "0" + minute : minute;
    second = (second < 10) ? "0" + second : second;

    let dayNumber = now.getDay()
    switch (dayNumber) {
        case 1 : 
            day = "Pazartesi"
        break ;
        case 2 : 
            day = "Salı"
        break ;
        case 3 : 
            day = "Çarşamba"
        break ;
        case 4 : 
            day = "Perşembe"
        break ;
        case 5 : 
            day = "Cuma"
        break ;
        case 6 : 
            day = "Cumartesi"
        break ;
        case 0 : 
            day = "Pazar"
        break ;
    }

    let tiime = hour +":" + minute + ":" + second + "   " + day

    myClock.innerHTML = tiime ;

}
setInterval(() => {
    showTime()
}, 1000);

