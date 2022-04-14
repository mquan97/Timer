const timeDisplay = document.querySelector("#timeDisplay")
const startBtn = document.querySelector("#startBtn")
const pauseBtn = document.querySelector("#pauseBtn")
const resetBtn = document.querySelector("#resetBtn")

let startTime = 0
let elapsedTime = 0
let paused = true
let intervalId

let minisecs = 0
let secs = 0
let mins = 0

startBtn.addEventListener("click", () => {
    if (paused){
        paused = false
        startTime = Date.now() - elapsedTime
        intervalId = setInterval(updateTime, 1)
    }
})

pauseBtn.addEventListener("click", () => {
    if (!paused){
        paused = true
        elapsedTime = Date.now() - startTime
        clearInterval(intervalId)
    }
})

resetBtn.addEventListener("click", () => {
    paused = true
    startTime = 0
    elapsedTime = 0
    clearInterval(intervalId)
    timeDisplay.textContent = `00:00:00`
})

function updateTime(){
    elapsedTime = Date.now() - startTime

    minisecs = Math.floor((elapsedTime / 10)% 100)
    secs = Math.floor((elapsedTime / 1000) % 60)
    mins = Math.floor((elapsedTime / (1000 * 60)) % 60)

    minisecs = pad(minisecs)
    secs = pad(secs)
    mins = pad(mins)

    timeDisplay.textContent = `${mins}:${secs}:${minisecs}`


    function pad(unit){
        return (("0" + unit).length > 2 ? unit : "0" + unit )
    }
}