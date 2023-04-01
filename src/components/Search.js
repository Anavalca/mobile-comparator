import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Search = (props) => {
  const { searchText, onSearchText } = props
  

  return (
    <div>
      <label></label>
      <input
        type="text"
        placeholder="Escribe un modelo"
        value={searchText}
        className='px-5 py-2 rounded-full'
        onChange={(e) => onSearchText(e.currentTarget.value)}
      />
      <FontAwesomeIcon icon={faSearch} className='fa-sm pr-2 -translate-x-8' />
    </div>
  )
}

export default Search;