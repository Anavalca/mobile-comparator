const productListData = async () => {
  const url = 'https://itx-frontend-test.onrender.com/api/product'
  const response = await fetch(url)
  const data = await response.json()
  return data
}

export default productListData