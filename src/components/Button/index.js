import {ListItem, ButtonElement, Image} from './styledComponents'

const Button = props => {
  const {details, onClickButtonUserChoice} = props
  const {imageUrl, id} = details
  const lowerCaseId = id.toLowerCase()
  console.log(lowerCaseId)

  const onClickButton = () => {
    onClickButtonUserChoice(id)
  }

  return (
    <ListItem>
      <ButtonElement
        type="button"
        data-testid={`${lowerCaseId}Button`}
        onClick={onClickButton}
      >
        <Image className="img" src={imageUrl} alt={id} />
      </ButtonElement>
    </ListItem>
  )
}

export default Button
