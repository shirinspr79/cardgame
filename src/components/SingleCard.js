import './SingleCard.css'

export default function SingleCard({ card, handleChoice, flipped, disabled }) {

  const handleClick = () => {
    if (!disabled) {
      handleChoice(card)
    }
  }

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={'/main'+card.src} alt="card front" />
        <img className="back" src="/main/img/cover.png" onClick={handleClick} alt="cover" />
      </div>
    </div>
  )
}
