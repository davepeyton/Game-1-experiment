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

    const grid = document.querySelector('.grid')
    
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

    createBoard()

})