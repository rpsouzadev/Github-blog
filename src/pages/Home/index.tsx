import { PostsComponent } from './components/PostsComponent'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import * as S from './styles'

export function Home() {
  return (
    <>
      <Profile />
      <SearchForm />

      <S.PostSectionContainer>
        <PostsComponent />
        <PostsComponent />
        <PostsComponent />
        <PostsComponent />
      </S.PostSectionContainer>
    </>
  )
}
