const addProducts = async (productData) => {
  const url = "https://itx-frontend-test.onrender.com/api/cart"

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      "Content-type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(productData),
    credentials: 'include',
  })
  const data = await response.json()
  return data
}

export default addProducts

