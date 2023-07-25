setInterval(() => {
 
    d = new Date();
    hTime = d.getHours();
    mTime = d.getMinutes();
    sTime = d.getSeconds();

    hRotation = 30*hTime + mTime/2;
    mRotation = 6*mTime;
    sRotation = 6*sTime;

    hours = document.querySelector(".hours");
    minuts = document.querySelector(".minuts");
    seconds = document.querySelector(".seconds");


    hours.style.transform = `rotate(${hRotation}deg)`;
    minuts.style.transform = `rotate(${mRotation}deg)`;
    seconds.style.transform = `rotate(${sRotation}deg)`;
}, 1000)