import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ComponentProps } from 'react'
import * as S from './styles'

type LinkComponentProps = ComponentProps<typeof S.LinkContainer> & {
  text: string
}

export function LinkComponent({ text, ...rest }: LinkComponentProps) {
  return (
    <S.LinkContainer {...rest}>
      {text}
      <FontAwesomeIcon icon={faUpRightFromSquare} />
    </S.LinkContainer>
  )
}
