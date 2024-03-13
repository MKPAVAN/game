import {Component} from 'react'

import {RiCloseLine} from 'react-icons/ri'

import Popup from 'reactjs-popup'

import {
  BgContainer,
  Header,
  TitleContainer,
  Title,
  ScoreContainer,
  TitleScore,
  ButtonContainer,
  PopupContainer,
  PopupContentContainer,
  CardContainer,
  PopupImage,
  CloseButton,
  RulesButton,
  ResultContainer,
  ResultTopContainer,
  Card,
  Head,
  ResultImage,
  MessageContainer,
  Para,
  PlayButton,
} from './styledComponents'

import Button from '../Button'

class Game extends Component {
  state = {
    score: 0,
    userImage: '',
    opponentImage: '',
    message: '',
    showResult: false,
  }

  renderResultOfTheGame = () => {
    const {userImage, opponentImage, message} = this.state

    const onClickPlayAgainButton = () => {
      this.setState(prevState => ({
        showResult: !prevState.showResult,
      }))
    }

    return (
      <ResultContainer>
        <ResultTopContainer>
          <Card>
            <Head>YOU</Head>
            <ResultImage src={userImage} alt="your choice" />
          </Card>
          <Card>
            <Head>OPPONENT</Head>
            <ResultImage src={opponentImage} alt="opponent choice" />
          </Card>
        </ResultTopContainer>
        <MessageContainer>
          <Para>{message}</Para>
          <PlayButton type="button" onClick={onClickPlayAgainButton}>
            PLAY AGAIN
          </PlayButton>
        </MessageContainer>
      </ResultContainer>
    )
  }

  onClickButtonUserChoice = userId => {
    const {choicesList} = this.props
    const randomNumber = Math.floor(Math.random() * 3)
    const randomId = choicesList[randomNumber].id

    if (userId === 'PAPER' && randomId === 'ROCK') {
      this.setState(prevState => ({
        userImage: choicesList[2].imageUrl,
        opponentImage: choicesList[0].imageUrl,
        message: 'YOU WON',
        showResult: true,
        score: prevState.score + 1,
      }))
    } else if (userId === 'SCISSORS' && randomId === 'ROCK') {
      this.setState(prevState => ({
        userImage: choicesList[1].imageUrl,
        opponentImage: choicesList[0].imageUrl,
        message: 'YOU LOSE',
        showResult: true,
        score: prevState.score - 1,
      }))
    } else if (userId === 'ROCK' && randomId === 'PAPER') {
      this.setState(prevState => ({
        userImage: choicesList[0].imageUrl,
        opponentImage: choicesList[2].imageUrl,
        message: 'YOU LOSE',
        showResult: true,
        score: prevState.score - 1,
      }))
    } else if (userId === 'SCISSORS' && randomId === 'PAPER') {
      this.setState(prevState => ({
        userImage: choicesList[1].imageUrl,
        opponentImage: choicesList[2].imageUrl,
        message: 'YOU WON',
        showResult: true,
        score: prevState.score + 1,
      }))
    } else if (userId === 'ROCK' && randomId === 'SCISSORS') {
      this.setState(prevState => ({
        userImage: choicesList[0].imageUrl,
        opponentImage: choicesList[1].imageUrl,
        message: 'YOU WON',
        showResult: true,
        score: prevState.score + 1,
      }))
    } else if (userId === 'PAPER' && randomId === 'SCISSORS') {
      this.setState(prevState => ({
        userImage: choicesList[1].imageUrl,
        opponentImage: choicesList[0].imageUrl,
        message: 'YOU LOSE',
        showResult: true,
        score: prevState.score - 1,
      }))
    } else {
      const drawImage = choicesList.find(each => each.id === userId)
      this.setState({
        userImage: drawImage.imageUrl,
        opponentImage: drawImage.imageUrl,
        showResult: true,
        message: 'IT IS DRAW',
      })
    }
  }

  render() {
    const {choicesList} = this.props
    const {showResult, score} = this.state

    return (
      <BgContainer>
        <Header>
          <TitleContainer>
            <Title>
              Rock
              <br />
              Paper
              <br />
              Scissors
            </Title>
          </TitleContainer>
          <ScoreContainer>
            <TitleScore>Score</TitleScore>
            <TitleScore>{score}</TitleScore>
          </ScoreContainer>
        </Header>
        {showResult ? (
          this.renderResultOfTheGame()
        ) : (
          <ButtonContainer>
            {choicesList.map(each => (
              <Button
                details={each}
                key={each.id}
                onClickButtonUserChoice={this.onClickButtonUserChoice}
              />
            ))}
          </ButtonContainer>
        )}

        <PopupContainer>
          <Popup
            modal
            trigger={
              <RulesButton type="button" className="trigger-button">
                Rules
              </RulesButton>
            }
          >
            {close => (
              <CardContainer>
                <CloseButton
                  aria-label="close"
                  type="button"
                  className="trigger-button"
                  onClick={() => close()}
                >
                  <RiCloseLine />
                </CloseButton>
                <PopupContentContainer>
                  <PopupImage
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                </PopupContentContainer>
              </CardContainer>
            )}
          </Popup>
        </PopupContainer>
      </BgContainer>
    )
  }
}

export default Game
