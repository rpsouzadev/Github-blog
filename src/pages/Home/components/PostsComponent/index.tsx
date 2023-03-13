import { PostsProps } from '../..'
import { relativeDateFormatter } from '../../../../utils/formatter'
import * as S from './styles'

interface PostComponentProps {
  post: PostsProps
}

export function PostsComponent({ post }: PostComponentProps) {
  const formatteDate = relativeDateFormatter(post.created_at)

  return (
    <S.PostsContainer to={`/post/${post.number}`}>
      <div>
        <strong>{post.title}</strong>
        <span>{formatteDate}</span>
      </div>
      <p>{post.body}</p>
    </S.PostsContainer>
  )
}
