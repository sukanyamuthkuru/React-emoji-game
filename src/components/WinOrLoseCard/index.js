// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {wonOrNot, score, onClickPlayAgainButton} = props
  const status = wonOrNot ? 'You Won' : 'You Lose'
  const statusScore = wonOrNot ? 'Best Score' : 'Score'
  const statusCount = wonOrNot ? 12 : score
  const url = wonOrNot
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const onClickPlayAgain = () => [onClickPlayAgainButton()]
  return (
    <div className="wonOrLose-container">
      <div className="content-container">
        <h1 className="heading">{status}</h1>
        <div>
          <p className="scores">{statusScore}</p>
          <p className="scoreOfPlayer">{statusCount}/12</p>
        </div>
        <button type="button" className="button" onClick={onClickPlayAgain}>
          Play Again
        </button>
      </div>
      <img src={url} className="image" alt="win or lose" />
    </div>
  )
}

export default WinOrLoseCard
