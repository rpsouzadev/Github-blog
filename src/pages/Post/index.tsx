import { PostsProps } from '../Home'
import { api } from '../../lib/axios'
import { useParams } from 'react-router-dom'
import { useCallback, useEffect, useState } from 'react'
import { PostInfo } from './components/PostInfo'

import * as S from './styles'
import { PostContent } from './components/PostContent'

const username = import.meta.env.VITE_GITHUB_USERNAME
const repoName = import.meta.env.VITE_GITHUB_REPONEME

export function Post() {
  const [postData, setPostData] = useState<PostsProps>({} as PostsProps)
  const [isLoading, setIsloading] = useState(true)

  const { id } = useParams()

  const getPostDetails = useCallback(async () => {
    try {
      setIsloading(true)
      const response = await api.get(
        `/repos/${username}/${repoName}/issues/${id}`,
      )

      setPostData(response.data)
    } finally {
      setIsloading(false)
    }
  }, [postData])

  useEffect(() => {
    getPostDetails()
  }, [])

  return (
    <>
      <PostInfo isLoading={isLoading} postData={postData} />
      {!isLoading && <PostContent content={postData.body} />}
    </>
  )
}
