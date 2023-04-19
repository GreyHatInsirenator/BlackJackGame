let player = {
    name: "Nick",
    chips: 188
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let playerEl = document.getElementById("player-el")
playerEl.innerHTML = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNum = Math.floor(Math.random()*13) + 1
    if (randomNum > 10) {
        return 10
    } else if (randomNum === 1) {
        return 11
    } else {
        return randomNum
    }
}

function startGame() {
    let isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {

    cardsEl.innerHTML = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        cardsEl.innerHTML += cards[i] + " "
    }

    sumEl.innerHTML = "Sum: " + sum

    if (sum <= 20) {
        message ="Do you want to draw a new card?"
        isAlive = true

    } else if (sum === 21) {
        message="Wohoo! You've got Blackjack!"
        hasBlackJack = true
    }else {
        message="You're out of the game!"
        isAlive = false
    }
    messageEl.innerHTML = message    
}

function newCard() {
    if (isAlive === true && hasBlackJack ===false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
    
}


