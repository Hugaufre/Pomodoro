const buttons = document.querySelectorAll("button")
const hoverButton = document.getElementById("init")
var initWork = 1500
var initPause = 300
var workTime = initWork-1
var pauseTime = initPause-1
var refreshIntervalId
var refreshIntervalId2
var switchPW = false
var islaunched = false

for(var i = 0; i < buttons.length; i++){
    
    buttons[0].addEventListener("click",() =>{

        if(!islaunched){
            document.getElementById("init").textContent = "REINITIALIZE"
            islaunched = true
            decreaseWorkTime()
        }else{
            workTime = initWork-1
            pauseTime = initPause-1
            clearInterval(refreshIntervalId)
            
            islaunched = false
            document.getElementById("init").textContent = "START"
            document.getElementById("timer").textContent = '25' + ":"+ '00';
            switchPW = true
            switchPauseWork()
        }
    })
}

function decreaseWorkTime(){

    console.log(workTime)
    refreshIntervalId = setInterval(function() {

    let minutes = parseInt(workTime / 60, 10)
    let seconds = parseInt(workTime % 60, 10)
    
    seconds = seconds < 10 ? '0'+ seconds : seconds
    minutes = minutes < 10 ? '0'+ minutes : minutes
        
        document.getElementById("timer").textContent = minutes + ":" + seconds
        
        workTime == 0 ? 0 : workTime--
        if(minutes == 0 && seconds == 0){
                workTime = initWork-1
                clearInterval(refreshIntervalId)
                initPauseTimer()
                decreasePauseTime()  
                switchPauseWork()
            }
    }, 1_000)
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
        pauseTime = initPause-1
        clearInterval(refreshIntervalId)
        initWorkTimer()
        decreaseWorkTime()
        switchPauseWork()
        }

    }, 1_000)

}

function switchPauseWork(){

    if(!switchPW){
        console.log("Green");
        document.getElementById("pauseID").style.backgroundColor = "green"
        document.getElementById("pauseID").style.boxShadow = "2px 2px 5px 5px black"
        document.getElementById("workID").style.backgroundColor = "black"
        document.getElementById("workID").style.boxShadow = "none"
        document.querySelector("body").style.backgroundColor = "green"
        document.getElementById("init").style.backgroundColor = "green" 
        switchPW = true
    }else{
        console.log("Red");
        document.getElementById("pauseID").style.backgroundColor = "black"
        document.getElementById("pauseID").style.boxShadow = "none"
        document.getElementById("workID").style.backgroundColor = "#c30303"
        document.getElementById("workID").style.boxShadow = "2px 2px 5px 5px black"
        document.querySelector("body").style.backgroundColor = "#c30303"
        document.getElementById("init").style.backgroundColor = "#c30303"
        switchPW = false
    }
}


hoverButton.addEventListener("mouseover", event => {

    hoverButton.setAttribute("style", "background-color: #ff2323")
})

hoverButton.addEventListener("mouseout", event => {

    hoverButton.setAttribute("style", "background-color: none")
})

function initPauseTimer(){

    let minutes = parseInt(initPause / 60, 10)
        let seconds = parseInt(initPause % 60, 10)

        seconds = seconds < 10 ? '0'+ seconds : seconds
        minutes = minutes < 10 ? '0'+ minutes : minutes

        document.getElementById("timer").textContent = minutes + ":" + seconds
}

function initWorkTimer(){

    let minutes = parseInt(initWork / 60, 10)
        let seconds = parseInt(initWork % 60, 10)

        seconds = seconds < 10 ? '0'+ seconds : seconds
        minutes = minutes < 10 ? '0'+ minutes : minutes

        document.getElementById("timer").textContent = minutes + ":" + seconds
}