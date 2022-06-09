import { useState } from 'react'
import { useEffect } from 'react/cjs/react.development'
import './App.css'
import SingleCard from './SingleCard.js'

const cardImage=[
  {"src":"img/helmet-1.png", matched: false},
  {"src":"img/potion-1.png",matched: false},
  {"src":"img/ring-1.png",matched: false},
  {"src":"img/scroll-1.png",matched: false},
  {"src":"img/shield-1.png",matched: false},
  {"src":"img/sword-1.png",matched: false},
  ]
function App() {
  const [cards,setCards]= useState([])
  const [turns,setTurns]= useState(0)
  const [ChoiceOne,setChoiceOne]= useState(null)
  const [ChoiceTwo,setChoiceTwo]= useState(null)
  
  
  const shuffleCard = () => {
    const shuffleCard =[...cardImage, ...cardImage]
    .sort(()=> Math.random()- 0.5).map((card)=>({...card , id:Math.random()}))
    setCards(shuffleCard)
    setTurns(0)
  }
   const handleChoice = (card) =>{
   ChoiceOne? setChoiceTwo(card) : setChoiceOne(card)
   }

    useEffect (()=>{
      if (ChoiceOne && ChoiceTwo){
         if (ChoiceOne.src === ChoiceTwo.src){
          setCards(prevCards=>{
            return prevCards.map(card =>{
              if(card.src===ChoiceOne){
                return {...card, matche:true}
              } else {
                return card
              }
            })
          })
          resetTurn()
         } else{
          resetTurn()
         }           
      }
    },[ChoiceOne, ChoiceTwo])   

    const resetTurn= () =>{
     setChoiceOne(null)
     setChoiceTwo(null)
     setTurns(prevTurns => prevTurns +1)
    }
  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCard}>New Game</button>

    <div className="card-grid">
        { 
        cards.map(card => (
          <SingleCard  key={card.id} card={card}
          handleChoice={handleChoice}
          flipped = {card === ChoiceOne || card === ChoiceTwo || card.matche} 
          />
        ))}  
    </div>
   </div>
  );
}
export default App