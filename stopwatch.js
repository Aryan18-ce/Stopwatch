let hours, minutes, seconds = 0;
let timer = null;

function updateDisplay() {
    const dis = document.getElementById("display");
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    dis.textContent=`${h}:${m}:${s}`;

}
function starttime(){
    if(timer!==null)
        return;

    timer = setInterval(() => {
       seconds++;
       if(seconds==60){
        seconds=0;
        minutes++
       } 
       if(minutes==60){
        minutes=0;
        hours++;
       }
       updateDisplay();
    }, 1000);
}
function stoptimer(){
    clearInterval(timer)
    timer=null;
}
function reset(){
    stoptimer();
    hours=minutes=seconds=0;
    updateDisplay();
}

document.getElementById("start").addEventListener("click",starttime);
document.getElementById("stop").addEventListener("click",stoptimer);
document.getElementById("reset").addEventListener("click",reset);