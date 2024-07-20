import './index.css'

const NavBar = props => {
  const {score, topScore, gameOn} = props
  return (
    <div className="nav-bar-container">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo"
        />
        <h1 className="logo-heading">Emoji Game</h1>
      </div>
      {gameOn ? (
        <div className="score-container">
          <p className="score">Score: {score}</p>
          <p className="score">Top Score: {topScore}</p>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default NavBar
