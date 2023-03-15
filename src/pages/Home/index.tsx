import { useCallback, useEffect, useState } from 'react'
import { Spinner } from '../../components/Spinner'
import { api } from '../../lib/axios'
import { PostsComponent } from './components/PostsComponent'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import * as S from './styles'

const username = import.meta.env.VITE_GITHUB_USERNAME
const repoName = import.meta.env.VITE_GITHUB_REPONEME

export interface PostsProps {
  title: string
  body: string
  created_at: string
  number: number
  html_url: string
  comments: number
  user: {
    login: string
  }
}

export function Home() {
  const [posts, setPosts] = useState<PostsProps[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const getPost = useCallback(async (query: string = '') => {
    try {
      setIsLoading(true)
      const response = await api.get(
        `/search/issues?q=${query}%20repo:${username}/${repoName}`,
      )
      setPosts(response.data.items)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    getPost()
  }, [getPost])

  return (
    <>
      <Profile />
      <SearchForm postsLength={posts.length} getPost={getPost} />

      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <S.PostSectionContainer>
            {posts.map((post) => (
              <PostsComponent key={post.number} post={post} />
            ))}
          </S.PostSectionContainer>
        </>
      )}
    </>
  )
}
