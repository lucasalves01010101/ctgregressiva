const secondsContainer = document.querySelector('#seconds')
const minutesContainer = document.querySelector('#minutes')
const hoursContainer = document.querySelector('#hours')
const daysContainer = document.querySelector('#days')
const nextYearContainer = document.querySelector('#year')

const newYearTime  = new Date(`December 26 2020 18:15`)

nextYearContainer.textContent = "2021"

const updateCountdown = () => {
    const currentTime = new Date()
    const diferrence = newYearTime - currentTime
    if(diferrence <= 0){
        const contador = document.querySelector('#countdown')
        contador.style.display="none"

        const texto = document.querySelector('#h1')
        texto.innerText = "teste"

    }
    const days = Math.floor(diferrence / 1000 / 60 / 60 / 24)
    const hours = Math.floor(diferrence / 1000 / 60 / 60 ) % 24
    const minutes = Math.floor(diferrence / 1000 / 60 ) % 60
    const seconds = Math.floor(diferrence / 1000 ) % 60

    secondsContainer.textContent = seconds < 10 ? '0' + seconds : seconds
    minutesContainer.textContent = minutes < 10 ? '0' + minutes : minutes
    hoursContainer.textContent = hours < 10 ? '0' + hours : hours
    daysContainer.textContent = days < 10 ? '0' + days : days 

    


}

setInterval(updateCountdown , 1000)