import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'

import * as S from './styles'
import { LinkComponent } from '../../../../components/LinkComponent'

export function Profile() {
  return (
    <S.ProfileContainer>
      <S.ProfileAvatar src="https://github.com/Muglly.png" />

      <S.ProfileContent>
        <header>
          <h1>Rafael Souza</h1>

          <LinkComponent text="github" href="#" />
        </header>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, vitae
          inventore? Incidunt!
        </p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            Muglly
          </li>

          <li>
            <FontAwesomeIcon icon={faBuilding} />
            Autonômo
          </li>
          <li>
            <FontAwesomeIcon icon={faUserGroup} />
            seguidores
          </li>
        </ul>
      </S.ProfileContent>
    </S.ProfileContainer>
  )
}
