document.addEventListener('DOMContentLoaded', () => {

    //card options
    const cardArray = [
        {
            name: 'apple', 
            img: 'images/apple.png'
        },
        {
            name: 'apple', 
            img: 'images/apple.png'
        },
        {
            name: 'bananna', 
            img: 'images/bananna.png'
        },
        {
            name: 'bananna', 
            img: 'images/bananna.png'
        },
        {
            name: 'kiwi', 
            img: 'images/kiwi.png'
        },
        {
            name: 'kiwi', 
            img: 'images/kiwi.png'
        },
        {
            name: 'orange', 
            img: 'images/orange.png'
        },
        {
            name: 'orange', 
            img: 'images/orange.png'
        },
        {
            name: 'peach', 
            img: 'images/peach.png'
        },
        {
           name: 'peach', 
            img: 'images/peach.png'
        },
        {
            name: 'pear', 
            img: 'images/pear.png'
        },
        {
            name: 'pear', 
            img: 'images/pear.png'
        },
    ]
cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []
    //create your board

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('data-id', i)
            //card.addEventListener('click', flipcard)
            grid.appendChild(card)
        }
    }
//check for a match--
function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardChosen[0] === cardsChosen[1]) {
        alert('You found a match')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardsArray.length/2) {
        resultDisplay.textContent = 'Congratulations! Yon WON'
    }
  }

//flip your card
function flipCard() {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosen.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
    }
}

    createBoard()

})