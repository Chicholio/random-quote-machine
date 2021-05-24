import React from 'react'
import styled from 'styled-components'
import { FrasesDB } from '../dataBase/FrasesDB'

const DivApp = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;

`

const DivPrincipal = styled.div`
  padding:20px;
` 

const DivButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 30px 10px 30px;
`

const DivSentences = styled.div`
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 15px;
`

const DivAuthor = styled.div`
    text-align: right;
    font-size: 20px;
`

const ButtonAlea = styled.div`
  border: none;
  padding: 10px;
  color: white;
  background: black;
  border-radius: 20px;
`


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      color: "",
      sentence: "",
      author: ""
    }
  }

  frasesAlea = () => {
    const cambiante = Math.round(Math.random() * 19)

    this.setState({
      color: FrasesDB[cambiante]["color"],
      sentence: FrasesDB[cambiante]["sentence"],
      author: FrasesDB[cambiante]["author"]
    })
  }

  componentDidMount() {
    this.frasesAlea()
  }

  render() {
    return (
      <DivApp style={{ backgroundColor: `${this.state.color}`, padding: '0px 20px' }}>
        <DivPrincipal style={{ backgroundColor: 'white', borderRadius: '20px', width: '80%' }}>
          <div id="quote-box" style={{ color: `${this.state.color}` }}>
            <DivSentences id="text" style={{ fontSize: 'Arial', color: `${this.state.color}` }}>
              {this.state.sentence}
            </DivSentences>
            <DivAuthor id="quote-autor" style={{ fontSize: 'Arial', color: `${this.state.color}` }}>
              {this.state.author}
            </DivAuthor>
            <DivButtons>
              <div>
                <button style={{ background: 'transparent', border: 'none' }}><a href={`https://twitter.com/intent/tweet/?text="${this.state.sentence}${this.state.author}"`} id="tweet-quote" target="_blanck"><img src="https://i.ibb.co/7RgdVpC/twitter.png" alt="twitter" style={{ width: '40px' }} /></a></button>
              </div>
              <div>
                <ButtonAlea id="new-quote" onClick={this.frasesAlea}>Aleatoria</ButtonAlea>
              </div>
            </DivButtons>
          </div>
        </DivPrincipal>
      </DivApp>
    )
  }
}

export default App