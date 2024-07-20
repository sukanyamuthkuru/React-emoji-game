// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {details, onClickEmojiCard} = props
  const {id} = details
  const onClickCard = () => {
    onClickEmojiCard(id)
  }
  return (
    <li className="list-item-container" onClick={onClickCard}>
      <button className="button" type="button">
        <img src={details.emojiUrl} alt={details.emojiName} className="emoji" />
      </button>
    </li>
  )
}

export default EmojiCard
