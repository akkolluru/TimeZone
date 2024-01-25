
document.getElementById('timezone').addEventListener('change', displayTime);

function displayTime() {
    const selectedTimeZone = document.getElementById('timezone').value;
    const options = {
        timeZone: selectedTimeZone,
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
    };
    
    const formattedTime = new Intl.DateTimeFormat('en-US', options).format(new Date());
    document.getElementById('displayTime').innerText = `Current Time : ${formattedTime}`;
}

displayTime();
setInterval(displayTime,1000)