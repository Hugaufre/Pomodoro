const buttons = document.querySelectorAll("button");
let islaunched = false
var workTime = 5
var pauseTime = 5
var refreshIntervalId


for(var i = 0; i < buttons.length; i++){
    buttons[0].addEventListener("click",() =>{

        if(!islaunched){
            document.getElementById("init").textContent = "Reinitialize"
        
                decreaseWorkTime()
                islaunched = true;
        }else{
            workTime = 5
            pauseTime = 5
            clearInterval(refreshIntervalId)
            islaunched = false
            document.getElementById("init").textContent = "Start"
            document.getElementById("timer").textContent = 0 + ":"+ '00';
        }
    })
}

function decreaseWorkTime(){
    refreshIntervalId = setInterval(() => {

        let minutes = parseInt(workTime / 60, 10)
        let seconds = parseInt(workTime % 60, 10)

        seconds = seconds < 10 ? '0'+ seconds : seconds
        
        document.getElementById("timer").textContent = minutes + ":" + seconds
        
        workTime == 0 ? 0 : workTime--
        if(minutes == 0 && seconds == 0){
            decreasePauseTime()
        }

    }, 1_000)

    isfinished = true
}

function decreasePauseTime(){

    refreshIntervalId = setInterval(() => {

        let minutes = parseInt(pauseTime / 60, 10)
        let seconds = parseInt(pauseTime % 60, 10)

        seconds = seconds < 10 ? '0'+ seconds : seconds
        document.getElementById("timer").textContent = minutes + ":" + seconds
        pauseTime == 0 ? 0 : pauseTime--

       if(minutes == 0 && seconds == 0){  
            decreaseWorkTime()
        }

    }, 1_000)

}

function refreshTime(){
    clearInterval(refreshIntervalId)
}