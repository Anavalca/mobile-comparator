

const Search = (props) => {
  const { onSearchText } = props

  return (
    <div>
      <label></label>
      <input
        type="text"
        placeholder="Escribe un modelo"
        value={props.value}
        onChange={(e) => onSearchText(e.currentTarget.value)}
      />
    </div>
  )
}

export default Search;