import { useState } from 'react'
import { PostsComponent } from './components/PostsComponent'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import * as S from './styles'

interface PostsProps {
  title: string
}

export function Home() {
  const [posts, setPosts] = useState<PostsProps>([])

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
