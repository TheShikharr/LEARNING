function updateclock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    let ampm = hours >= 12 ? "PM" : "AM";

    let timeDisp = `${hours} : ${minutes} : ${seconds}    ${ampm}`;
    document.querySelector(".time").textContent = timeDisp;

    
    let date = new Date();
    let month = date.toLocaleString('default', {
        month:"long"
    });
    let day = date.getDate();
    let year = date.getFullYear();
    let weekDay = date.toLocaleString('default', {
        weekday: "long"
    });

    let dateDisp = `${month} ${day}, ${year} (${weekDay})`;
    document.querySelector(".date").textContent = dateDisp;

}
setInterval(updateclock, 1000);
updateclock();