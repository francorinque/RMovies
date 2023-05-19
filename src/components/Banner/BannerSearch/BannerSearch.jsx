import { Button } from '../../UI'
import { FieldInput, Input } from './BannerSearch.styled'

import { useNavigate } from 'react-router-dom'

const BannerSearch = () => {
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.key === 'Enter' && navigate('/search-results')
  }

  return (
    <FieldInput>
      <Input
        type='text'
        placeholder='Search for Movie or Tv show...'
        onKeyUp={handleSubmit}
      />
      <Button h='100%' onClick={() => navigate('/search-results')}>
        Search
      </Button>
    </FieldInput>
  )
}
export default BannerSearch
