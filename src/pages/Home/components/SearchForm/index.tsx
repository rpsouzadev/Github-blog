import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import * as S from './styles'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormSchemaProps = z.infer<typeof searchFormSchema>

interface SearchFormProps {
  postsLength: number
  getPost: (query?: string) => Promise<void>
}

export function SearchForm({ postsLength, getPost }: SearchFormProps) {
  const { register, handleSubmit } = useForm<SearchFormSchemaProps>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchPosts(data: SearchFormSchemaProps) {
    await getPost(data.query)
  }

  return (
    <S.SearchContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <header>
        <h3>Publicações</h3>
        <span>{postsLength} pubicações</span>
      </header>
      <input type="text" placeholder="Buscar conteúdo" {...register('query')} />
    </S.SearchContainer>
  )
}
