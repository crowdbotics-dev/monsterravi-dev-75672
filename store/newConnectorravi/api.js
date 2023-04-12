import axios from "axios"
import {
  NEW_CONNECTOR_RAVI_USERNAME,
  NEW_CONNECTOR_RAVI_PASSWORD
} from "react-native-dotenv"
const newConnectorravi = axios.create({
  baseURL: "https://google.com",
  auth: {
    username: NEW_CONNECTOR_RAVI_USERNAME,
    password: NEW_CONNECTOR_RAVI_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
