const buttons = document.querySelectorAll("button")
const hoverButton = document.getElementById("init")

var refreshIntervalId
var refreshIntervalId2
var switchPW = false
var islaunched = false

var initWork = 599
var initPause = 59
var workTime = 599
var pauseTime = 59

var workMinutes = 25
var workSeconds = 0

var workSlider = document.getElementById("workRange")
var WorkValue = document.getElementById("workValue")
var pauseSlider = document.getElementById("pauseRange")
var pauseValue = document.getElementById("pauseValue")

workValue.textContent = '10' + ":" + '00'
pauseValue.textContent = '01' + ":" + '00'
convertToMinSec()

function convertToMinSec(){

    workSlider.oninput = function(){
        console.log(this.value-1)
        workTime = this.value-1
        initWork = this.value-1

        let minutes = parseInt(this.value / 60, 10)
        let seconds = parseInt(this.value % 60, 10)

        seconds = seconds < 10 ? '0'+ seconds : seconds
        minutes = minutes < 10 ? '0'+ minutes : minutes

        workMinutes = minutes
        workSeconds = seconds

        document.getElementById("timer").innerHTML = minutes + ":" + seconds
        workValue.innerHTML = minutes+" : "+seconds
    }

    pauseSlider.oninput = function(){

        pauseTime = this.value-1
        initPause = this.value-1

        let minutes = parseInt(this.value / 60, 10)
        let seconds = parseInt(this.value % 60, 10)
    
        seconds = seconds < 10 ? '0'+ seconds : seconds
        minutes = minutes < 10 ? '0'+ minutes : minutes
        
        pauseValue.innerHTML = minutes+" : "+seconds
        }
}



for(var i = 0; i < buttons.length; i++){

    workSeconds = workSeconds < 10 ? '0'+ workSeconds : workSeconds
    buttons[0].addEventListener("click",() =>{
        console.log("value: "+workTime)
        
        if(!islaunched){

            document.getElementById("workRange").disabled = true
            document.getElementById("pauseRange").disabled = true
            document.getElementById("init").textContent = "REINITIALIZE"
            islaunched = true
            decreaseWorkTime()
        }else{
            clearInterval(refreshIntervalId)
            workTime = initWork
            pauseTime = initPause
            islaunched = false
            document.getElementById("workRange").disabled = false
            document.getElementById("pauseRange").disabled = false
            
            document.getElementById("init").textContent = "START"
            document.getElementById("timer").textContent = workMinutes + ":"+ workSeconds
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
                workTime = initWork
                clearInterval(refreshIntervalId)
                initPauseTimer()
                decreasePauseTime()  
                switchPauseWork()
            }
    }, 1_000)
}

function decreasePauseTime(){

    console.log("pausevalue: "+pauseTime)
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

    var totalTime = initPause+1
    let minutes = parseInt(totalTime / 60, 10)
    let seconds = parseInt(totalTime % 60, 10)

    seconds = seconds < 10 ? '0'+ seconds : seconds
    minutes = minutes < 10 ? '0'+ minutes : minutes

    document.getElementById("timer").textContent = minutes + ":" + seconds
}

function initWorkTimer(){

    var totalTime = initWork+1
    let minutes = parseInt(totalTime / 60, 10)
    let seconds = parseInt(totalTime % 60, 10)

    seconds = seconds < 10 ? '0'+ seconds : seconds
    minutes = minutes < 10 ? '0'+ minutes : minutes

    document.getElementById("timer").textContent = minutes + ":" + seconds
}