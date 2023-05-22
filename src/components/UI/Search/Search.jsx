import { FieldInput, Input, FormStyled } from './Search.styled'

import Button from '../Button/Button'

import { IoSearchSharp } from 'react-icons/io5'
import { useSearch } from '../../../hooks/useSearch'

const Search = ({ inBanner }) => {
  const { query, handleSubmit, handleChange } = useSearch()

  return (
    <FormStyled onSubmit={handleSubmit} inBanner={inBanner}>
      <FieldInput>
        <Input
          type='text'
          placeholder='Search for Movie or Tv show...'
          onChange={handleChange}
          value={query}
          name='hola'
        />
      </FieldInput>

      <Button h='100%' onClick={handleSubmit}>
        <IoSearchSharp size={25} />
      </Button>
    </FormStyled>
  )
}
export default Search
