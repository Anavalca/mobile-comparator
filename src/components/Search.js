const Search = (props) => {
  const { searchText, onSearchText } = props

  return (
    <div>
      <label></label>
      <input
        type="text"
        placeholder="Escribe un modelo"
        value={searchText}
        onChange={(e) => onSearchText(e.currentTarget.value)}
      />
    </div>
  )
}

export default Search;