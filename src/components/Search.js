import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Search = (props) => {
  const { searchText, onSearchText } = props
  
  return (
    <div className='ml-4'>
      <input
        type="text"
        placeholder="Escribe una marca o modelo"
        value={searchText}
        className='pl-4 w-72 py-2 rounded-full'
        onChange={(e) => onSearchText(e.currentTarget.value)}
      />
      <FontAwesomeIcon icon={faSearch} className='fa-lg pr-2 -translate-x-8 opacity-25' />
    </div>
  )
}

export default Search;