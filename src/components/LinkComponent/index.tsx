import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ComponentProps, ReactNode } from 'react'
import * as S from './styles'

type LinkComponentProps = ComponentProps<typeof S.LinkContainer> & {
  text: string
  icon?: ReactNode
  variant?: 'iconLeft'
}

export function LinkComponent({ text, icon, ...rest }: LinkComponentProps) {
  return (
    <S.LinkContainer {...rest}>
      {text}
      {icon ?? <FontAwesomeIcon icon={faUpRightFromSquare} />}
    </S.LinkContainer>
  )
}
