const cardArray = [
    {
        name:'blank',
        img:'images/Blank.jpg'
    },
    {
        name: 'son',
        img:'images/son.jpg'
    },
    {
        name: 'vegeta',
        img:'images/vegeta.png'
    },
    {
        name: 'piccolo',
        img:'images/piccolo.jpg'
    },
    {
        name: 'krillin',
        img:'images/krillin.png'
    },
    {
        name: 'gohan',
        img:'images/gohan.jpg'
    },
    {
        name: 'freezer',
        img:'images/freezer.jpg'
    },
    {
        name: 'son',
        img:'images/son.jpg'
    },
    {
        name: 'vegeta',
        img:'images/vegeta.png'
    },
    {
        name: 'piccolo',
        img:'images/piccolo.jpg'
    },
    {
        name: 'krillin',
        img:'images/krillin.png'
    },
    {
        name: 'gohan',
        img:'images/gohan.jpg'
    },
    {
        name: 'freezer',
        img:'images/freezer.jpg'
    }
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const cardsChosen = []

function createBoard(){
    for (let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/Blank.jpg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)  
    }
}
createBoard()

function flipCard(){
    console.log(cardArray)
    const cardId = this.getAttribute('data-id')
    console.log(cardArray[cardId].name)
    console.log('clicked', cardId)
    console.log(cardsChosen)
    this.setAttribute('src', cardArray[cardId].img)

}