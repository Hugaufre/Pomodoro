const buttons = document.querySelectorAll("button");
let islaunched = false
var workTime = 5
var pauseTime = 5
var refreshIntervalId
var refreshIntervalId2
var switchPW = false


for(var i = 0; i < buttons.length; i++){
    buttons[0].addEventListener("click",() =>{

        if(!islaunched){
            document.getElementById("init").textContent = "REINITIALIZE"
            //document.getElementById("switchPauseWork").textContent = "WORK"
            islaunched = true
                decreaseWorkTime()
        }else{
            workTime = 5
            pauseTime = 5
            clearInterval(refreshIntervalId)
            islaunched = false
            document.getElementById("init").textContent = "START"
            document.getElementById("timer").textContent = '00' + ":"+ '00';
        }
    })
}

function decreaseWorkTime(){

    
    refreshIntervalId = setInterval(function() {

    let minutes = parseInt(workTime / 60, 10)
    let seconds = parseInt(workTime % 60, 10)
    
    seconds = seconds < 10 ? '0'+ seconds : seconds
    minutes = minutes < 10 ? '0'+ minutes : minutes
        
        document.getElementById("timer").textContent = minutes + ":" + seconds
        
        workTime == 0 ? 0 : workTime--
        if(minutes == 0 && seconds == 0){
                workTime = 5
                clearInterval(refreshIntervalId)
                switchPauseWork()
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
        minutes = minutes < 10 ? '0'+ minutes : minutes

        document.getElementById("timer").textContent = minutes + ":" + seconds
        pauseTime == 0 ? 0 : pauseTime--

     if(minutes == 0 && seconds == 0){ 
        pauseTime = 5
        clearInterval(refreshIntervalId)
        switchPauseWork()
        decreaseWorkTime()
        }

    }, 1_000)

}

function switchPauseWork(){

    if(!switchPW){
        document.getElementById("pauseID").style.backgroundColor = "green"
        document.getElementById("pauseID").style.boxShadow = "2px 2px 5px 5px black"
        document.getElementById("workID").style.backgroundColor = "black"
        document.getElementById("workID").style.boxShadow = "none"
        document.querySelector("body").style.backgroundColor = "green"
        document.getElementById("init").style.backgroundColor = "green"
        switchPW = true
    }else{
        document.getElementById("pauseID").style.backgroundColor = "black"
        document.getElementById("pauseID").style.boxShadow = "none"
        document.getElementById("workID").style.backgroundColor = "#c30303"
        document.getElementById("workID").style.boxShadow = "2px 2px 5px 5px black"
        document.querySelector("body").style.backgroundColor = "#c30303"
        document.getElementById("init").style.backgroundColor = "#c30303"
        switchPW = false
    }
}