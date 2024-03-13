import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #223a5f;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  width: 100%;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: solid 2px white;
  width: 1000px;
  padding: 20px;
  border-radius: 8px;
`
export const TitleContainer = styled.div``

export const Title = styled.h1`
  font-family: 'Bree Serif';
  font-size 20px;
  
`

export const ScoreContainer = styled.div`
  background-color: white;
  width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const TitleScore = styled.p`
  font-family: 'Bree Serif';
  font-size 16px;
  color:#223a5f;
  font-family:"Roboto";

`
export const ButtonContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;

  width: 400px;
  justify-content: center;
`
export const PopupContainer = styled.div`
  align-self: flex-end;
  margin-top: 15px;
  margin-right: 150px;
`

export const CardContainer = styled.div`
  background-color: white;
  padding: 40px;
  min-height: 80vh;
  width: 800px;
  display: flex;
  flex-direction: column;
`

export const PopupContentContainer = styled.div`
  background-color: #223a5f;
`

export const PopupImage = styled.img`
  height: 70vh;
`

export const CloseButton = styled.button`
  margin-bottom: 20px;
  align-self: flex-end;
`

export const RulesButton = styled.button`
  background-color: white;
  color: #223a5f;
  cursor: pointer;
  width: 60px;
  padding: 10px;
  font-weight: bold;
`

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ResultTopContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Card = styled.div`
  margin-left: 30px;
  margin-right: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Head = styled.h1``

export const ResultImage = styled.img`
  height: 150px;
`

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Para = styled.p`
  font-size: 48px;
  font-weight: bold;
`

export const PlayButton = styled.button`
  background-color: white;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  width: 120px;
`
