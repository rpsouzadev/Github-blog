import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faCalendar,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { LinkComponent } from '../../../../components/LinkComponent'

import { useNavigate } from 'react-router-dom'

import * as S from './styles'

export function PostInfo() {
  const navigate = useNavigate()

  function goBack() {
    navigate(-1)
  }

  return (
    <S.PostInfoContainer>
      <header>
        <LinkComponent
          as="button"
          icon={<FontAwesomeIcon icon={faChevronLeft} />}
          variant="iconLeft"
          text="voltar"
          onClick={goBack}
        />
        <LinkComponent text="ver no github" href="#" target="_blank" />
      </header>

      <h1>JavaScript data types and data structures</h1>

      <ul>
        <li>
          <FontAwesomeIcon icon={faGithub} />
          Muglly
        </li>

        <li>
          <FontAwesomeIcon icon={faCalendar} />
          Há 1 dia
        </li>
        <li>
          <FontAwesomeIcon icon={faComment} /> 5 comentarios
        </li>
      </ul>
    </S.PostInfoContainer>
  )
}
