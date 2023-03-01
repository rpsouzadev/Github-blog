import Logo from '../../assets/logo.svg'

import * as S from './styles'

export function Header() {
  return (
    <S.HeaderContainer>
      <img src={Logo} alt="logo escrito github blog" />
    </S.HeaderContainer>
  )
}
