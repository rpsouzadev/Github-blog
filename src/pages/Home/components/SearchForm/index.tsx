import * as S from './styles'

export function SearchForm() {
  return (
    <S.SearchContainer>
      <header>
        <h3>Publicações</h3>
        <span>6 pubicações</span>
      </header>
      <input type="text" placeholder="Buscar conteúdo" />
    </S.SearchContainer>
  )
}
