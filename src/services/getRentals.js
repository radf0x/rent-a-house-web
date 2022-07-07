import axios from "axios"

export async function getRentals() {
  const user = JSON.parse(sessionStorage.getItem("user"))
  const url = "http://localhost:3000/api/rentals"

  const headers = {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${user.access_token}`,
    },
  }

  try {
    const response = await axios.get(url, headers)
    return response
  } catch (error) {
    console.log("request failure: ", error)
    return error.response
  }
}
