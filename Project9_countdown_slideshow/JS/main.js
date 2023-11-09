function countdown(){
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds - 1;
        time.innerHTML = seconds;
        var time = settimeout(tick, 1000);
        if (seconds == -1){
            alert("Times up");
            clearTimeout(time);
            time.innerHTML ="";
        }
    }
    tick();
}