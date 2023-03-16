import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faCalendar,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { LinkComponent } from '../../../../components/LinkComponent'
import { useNavigate } from 'react-router-dom'
import { PostsProps } from '../../../Home'

import * as S from './styles'
import { Spinner } from '../../../../components/Spinner'
import { relativeDateFormatter } from '../../../../utils/formatter'

interface PostInfoProps {
  postData: PostsProps
  isLoading: boolean
}

export function PostInfo({ postData, isLoading }: PostInfoProps) {
  const navigate = useNavigate()

  function goBack() {
    navigate(-1)
  }

  const formattedDate = relativeDateFormatter(postData?.created_at)

  return (
    <S.PostInfoContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <header>
            <LinkComponent
              as="button"
              icon={<FontAwesomeIcon icon={faChevronLeft} />}
              variant="iconLeft"
              text="voltar"
              onClick={goBack}
            />
            <LinkComponent
              text="ver no github"
              href={postData.html_url}
              target="_blank"
            />
          </header>

          <h1>{postData.title}</h1>

          <ul>
            <li>
              <FontAwesomeIcon icon={faGithub} />
              {postData.user.login}
            </li>

            <li>
              <FontAwesomeIcon icon={faCalendar} />
              {formattedDate}
            </li>
            <li>
              <FontAwesomeIcon icon={faComment} /> {postData.comments}{' '}
              comentarios
            </li>
          </ul>
        </>
      )}
    </S.PostInfoContainer>
  )
}
