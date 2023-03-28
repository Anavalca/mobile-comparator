const ENDPOINT = 'https://itx-frontend-test.onrender.com/api/product';

const productListData = async () => {
  const response = await fetch(ENDPOINT)
  const data = await response.json()
  return data
}

export default productListData;