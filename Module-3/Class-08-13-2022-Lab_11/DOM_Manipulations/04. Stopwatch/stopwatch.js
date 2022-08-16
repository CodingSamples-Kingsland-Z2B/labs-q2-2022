function stopwatch() {
    //things to get
    //timer
    let time = document.getElementById("time");
    //start button
    let start = document.getElementById("startBtn");
    //stop button
    let stop = document.getElementById("stopBtn");
    let timer;
    //when the start button is clicked
    start.addEventListener("click",function(){
        //1 start the timer
        timer = setInterval(function(){
            //update the time in the the timer
            //get the time 
            let [min,sec] = time.innerText.split(":");
            min = Number(min);
            sec = Number(sec); 
            //00:59
            //01:00
            sec++;
            if(sec >=60){
                sec-=60;
                min++;
            }

            min = String(min);
            sec = String(sec);

            time.innerText = min.padStart(2,"0")+":"+sec.padStart(2,"0");

        },1000);
        //disable the start button
        start.setAttribute("disabled","true");
        //enable the stop button
        stop.removeAttribute("disabled");
    });  
    //when the stop button is clicked
    stop.addEventListener("click",function(){
        //stop the timer (clear innterval)
        clearInterval(timer);
        //reset the time to be 00:00
        time.innerText = "00:00";
        //enable the start button
        start.removeAttribute("disabled");
        //disbale the stop button
        stop.setAttribute("disabled","true");
    });
}