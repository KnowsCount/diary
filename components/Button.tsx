import styled from 'styled-components'

const Pushable = styled.button`
  background: hsl(340deg 100% 32%);
  border-radius: 12px;
  border: none;
  padding: 0;
  cursor: pointer;
  outline-offset: 4px;
`

const Front = styled.div`
  display: block;
  padding: 12px 42px;
  border-radius: 12px;
  font-size: 1.25rem;
  background: hsl(345deg 100% 47%);
  color: white;
  transform: translateY(-6px);
  transition:
      transform
      600ms
      cubic-bezier(.3, .7, .4, 1);
  ${Pushable}:active & {
    transform: translateY(-2px);
    transition: transform 34ms;
  }
`

interface Props {
  text: string
}

const Button = (props: Props) => {
  let { text } = props
	return (
		<Pushable>
			<Front>
			  {text}
			</Front>
		</Pushable>
	)
}

export default Button