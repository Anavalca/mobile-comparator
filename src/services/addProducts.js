const addProducts = async (productData) => {
  const url = "https://itx-frontend-test.onrender.com/api/cart";
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(productData),
    headers: { 
      "Content-type": "application/json",
      "set-cookie":"session_id=s%3ATcnD6qXHdWUWCB8oex1tGm9eSXfqkzqx.SROe5sjCY3%2FSz5WnJEW567o8A9uiqucBemv7FJLBk8U; Path=/; HttpOnly"  }
  })
  const data = await response.json()
  return data
}

export default addProducts;

