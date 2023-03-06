import { PostsComponent } from './components/PostsComponent'
import { Profile } from './components/Profile'
import * as S from './styles'

export function Home() {
  return (
    <>
      <Profile />

      <S.PostSectionContainer>
        <PostsComponent />
        <PostsComponent />
        <PostsComponent />
        <PostsComponent />
      </S.PostSectionContainer>
    </>
  )
}
