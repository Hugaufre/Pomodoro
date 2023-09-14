const buttons = document.querySelectorAll("button");
let islaunched = false
var workTime = 5
var pauseTime = 5
var refreshIntervalId
var refreshIntervalId2


for(var i = 0; i < buttons.length; i++){
    buttons[0].addEventListener("click",() =>{

        if(!islaunched){
            document.getElementById("init").textContent = "Reinitialize"
            document.getElementById("switchPauseWork").textContent = "WORK"
            islaunched = true
                decreaseWorkTime()
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

    
    refreshIntervalId = setInterval(function() {

    let minutes = parseInt(workTime / 60, 10)
    let seconds = parseInt(workTime % 60, 10)
        seconds = seconds < 10 ? '0'+ seconds : seconds
        
        document.getElementById("timer").textContent = minutes + ":" + seconds
        
        workTime == 0 ? 0 : workTime--
        if(minutes == 0 && seconds == 0){
                workTime = 5
                clearInterval(refreshIntervalId)
                document.getElementById("switchPauseWork").textContent = "PAUSE"
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
        pauseTime = 5
        document.getElementById("switchPauseWork").textContent = "WORK"
        clearInterval(refreshIntervalId)
        decreaseWorkTime()
        }

    }, 1_000)

}