const endDate = new Date('15 nov, 2025 20:00:00').getTime()
const startDate = new Date().getTime()


function updateTimer(){
    const now = new Date().getTime();
    const distanceCovered = now - startDate;
    const distancePending = endDate - now;

    const days = Math.floor(distancePending/(24*60*60*1000));
    const hrs = Math.floor((distancePending%(24*60*60*1000))/(60*60*1000));
    const mins = Math.floor((distancePending%(60*60*1000))/(60*1000));
    const secs = Math.floor((distancePending%(60*1000))/(1000));

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("minutes").innerHTML = mins;
    document.getElementById("seconds").innerHTML = secs;
}

setInterval(updateTimer, 1000);