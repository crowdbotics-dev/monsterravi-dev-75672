import axios from "axios"
import {} from "react-native-dotenv"
const newConnectorravi = axios.create({
  baseURL: "https://google.com",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
