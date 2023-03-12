import { PostsProps } from '../..'
import * as S from './styles'

interface PostComponentProps {
  post: PostsProps
}

export function PostsComponent({ post }: PostComponentProps) {
  return (
    <S.PostsContainer to={`/post/${post.number}`}>
      <div>
        <strong>{post.title}</strong>
        <span>{post.created_at}</span>
      </div>
      <p>{post.body}</p>
    </S.PostsContainer>
  )
}
