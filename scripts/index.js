const app = document.getElementById('app')

let timer = document.getElementById('timer-view')

const textTimer = document.getElementById('text-timer')
const startBtn = document.getElementById('start-btn')
const resetBtn = document.getElementById('reset-btn')
const stopBtn = document.getElementById('stop-btn')


let timeCount = 0

timer.textContent = `${timeCount} sec`

let a = null

function startTime(){
    startBtn.disabled = true
    a = setInterval(() => {
    timeCount += 1
    timer.textContent = `${timeCount} sec`
   }, 1000);
}
function stopTimer(){
    startBtn.disabled = false
    clearInterval(a)
}

function resetTimer(){
    startBtn.disabled = false
    clearInterval(a)
    timeCount = 0
    timer.textContent = `${timeCount} sec`

}

startBtn.addEventListener('click', startTime)
resetBtn.addEventListener('click', resetTimer)
stopBtn.addEventListener('click', stopTimer)


