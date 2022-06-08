import { useState } from 'react'
import './App.css'

const cardImage=[
  {"src":"img/helmet-1.png"},
  {"src":"img/potion-1.png"},
  {"src":"img/ring-1.png"},
  {"src":"img/scroll-1.png"},
  {"src":"img/shield-1.png"},
  {"src":"img/sword-1.png"},
  ]
function App() {
  const [cards,setCards]= useState([])
  // const [turns,setTurns]= useState(0)
  const shuffleCard = () => {
    const shuffleCard =[...cardImage, ...cardImage]
    .sort(()=> Math.random()- 0.5)
    Map((card)=>({ ...card , id:Math.random()}))

    setCards(shuffleCard)
    // setTurns(0)
  }
  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCard}>New Game</button>

    <div className="card-grid">
      {
        cards.map(card => (
          <div className="card" key={card.id}>
            <div>
              <img className="front" src={cards.src} alt="card front" />
              <img className="back" src={"/img/cover.png"} alt="card back" />
              </div>
          </div>
             ))}      
    </div>
    </div>
  );
}
export default App
