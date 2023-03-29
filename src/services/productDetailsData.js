const productListData = async (productId) => {
  const ENDPOINT = `https://itx-frontend-test.onrender.com/api/product/${productId}`;
  const response = await fetch(ENDPOINT)
  const data = await response.json()
  return data
}

export default productListData;