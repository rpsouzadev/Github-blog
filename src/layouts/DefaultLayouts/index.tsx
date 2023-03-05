import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'

import * as S from './styles'

export function DefaultLayouts() {
  return (
    <S.LayoutContainer>
      <Header />
      <main>
        <Outlet />
      </main>
    </S.LayoutContainer>
  )
}
