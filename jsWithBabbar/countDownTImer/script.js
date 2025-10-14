const endDate = new Date('1 oct, 2025 20:00:00').getTime()
const startDate = new Date("30 oct, 2025 20:00:00").getTime()


function updateTimer(){
    const now = new Date().getTime();
    const distanceCovered = now - startDate;
    const distancePending = endDate - now;

    const oneDayInMillis = (24*60*60*1000);
    const oneHourInMillis = (60*60*1000)
    const oneMinInMillis = (60*1000)
    const oneSecondInMillis = (1000)
    const days = Math.floor(distancePending/oneDayInMillis);
    const hrs = Math.floor((distancePending%(oneDayInMillis))/oneHourInMillis);
    const mins = Math.floor((distancePending%(oneHourInMillis))/oneMinInMillis);
    const secs = Math.floor((distancePending%(oneMinInMillis))/oneSecondInMillis)    ;

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("minutes").innerHTML = mins;
    document.getElementById("seconds").innerHTML = secs;

    // calculate width percentage for progress bar
    const totalDistance = endDate - startDate;
    const percentageDistance = (distanceCovered/totalDistance)*100;
    document.getElementById("progress-bar").style.width = percentageDistance + "%";

    if(distancePending < 0){
        clearInterval()
        document.getElementById("countdown").innerHTML = "Experired";
        document.getElementById("progress-bar").style.width = "100%"
    }

}

setInterval(updateTimer, 1000);