import { useCallback, useEffect, useState } from 'react'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { LinkComponent } from '../../../../components/LinkComponent'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'

import * as S from './styles'
import { api } from '../../../../lib/axios'

const username = import.meta.env.VITE_GITHUB_USERNAME

interface ProfileData {
  login: string
  bio: string
  avatar_url: string
  html_url: string
  name: string
  company?: string
  followers: number
}

export function Profile() {
  const [profileData, setProfileData] = useState<ProfileData>({} as ProfileData)
  const [isLoading, setIsLoading] = useState(true)

  const getProfileData = useCallback(async () => {
    try {
      setIsLoading(true)
      const response = await api.get(`/users/${username}`)

      setProfileData(response.data)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    getProfileData()
  }, [getProfileData])

  return (
    <S.ProfileContainer>
      <S.ProfileAvatar src={profileData.avatar_url} />

      <S.ProfileContent>
        <header>
          <h1>{profileData.name}</h1>

          <LinkComponent
            text="github"
            href={profileData.html_url}
            target="_blank"
          />
        </header>
        <p>{profileData.bio}</p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            {profileData.login}
          </li>

          {profileData?.company && (
            <li>
              <FontAwesomeIcon icon={faBuilding} />
              {profileData.company}
            </li>
          )}
          <li>
            <FontAwesomeIcon icon={faUserGroup} />
            {profileData.followers} seguidores
          </li>
        </ul>
      </S.ProfileContent>
    </S.ProfileContainer>
  )
}
