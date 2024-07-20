/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    presentList: [],
    wonORLose: false,
    gameOn: true,
  }

  onClickPlayAgainButton = () => {
    let {topScore} = this.state
    const {score} = this.state
    if (score > topScore) {
      topScore = score
    }
    this.setState({topScore, score: 0, gameOn: true, presentList: []})
  }

  onClickEmojiCard = id => {
    const {presentList, score} = this.state
    console.log(presentList.length)
    if (presentList.includes(id)) {
      if (score >= 12) {
        this.setState({wonORLose: true, gameOn: false})
      } else {
        this.setState({wonORLose: false, gameOn: false})
      }
    } else {
      this.setState(preState => ({
        presentList: [...preState.presentList, id],
        score: preState.score + 1,
      }))
    }
  }

  render() {
    const {score, topScore} = this.state
    let {gameOn, wonORLose} = this.state
    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }

    const randomList = shuffledEmojisList()
    if (score === 12) {
      gameOn = false
      wonORLose = true
    }
    return (
      <div className="app-container">
        <NavBar score={score} topScore={topScore} gameOn={gameOn} />
        {gameOn ? (
          <ul className="list-container">
            {randomList.map(each => (
              <EmojiCard
                key={each.id}
                details={each}
                onClickEmojiCard={this.onClickEmojiCard}
              />
            ))}
          </ul>
        ) : (
          <WinOrLoseCard
            wonOrNot={wonORLose}
            score={score}
            onClickPlayAgainButton={this.onClickPlayAgainButton}
          />
        )}
      </div>
    )
  }
}

export default EmojiGame
