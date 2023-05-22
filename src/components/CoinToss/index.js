// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {Total: 0, Heads: 0, Tails: 0, toss: 0}

  tossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prev => ({
        toss: tossResult,
        Heads: prev.Heads + 1,
        Total: prev.Total + 1,
      }))
    } else {
      this.setState(prev => ({
        toss: tossResult,
        Tails: prev.Tails + 1,
        Total: prev.Total + 1,
      }))
    }
  }

  render() {
    const {Total, Heads, Tails, toss} = this.state
    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <div className="imgContainer">
            {toss === 0 ? (
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
                alt="toss result"
              />
            ) : (
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
                alt="toss result"
              />
            )}
          </div>
          <div className="btnContainer">
            <button className="btn" onClick={this.tossCoin}>
              Toss Coin
            </button>
          </div>
          <div className="resultsContainer">
            <p className="span">Total: {Total}</p>
            <p className="span">Heads: {Heads}</p>
            <p className="span">Tails: {Tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
