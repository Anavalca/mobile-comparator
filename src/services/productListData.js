const productListData = async () => {
  const url = '/api/product'
  const response = await fetch(url)
  const data = await response.json()
  return data
}

export default productListData