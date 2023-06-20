import axios from "axios";
import Api from "../utils/api";
import { API } from "../utils/constants";

const httpClient = axios.create({
  baseURL: API.baseURL,
});

export const api = new Api(httpClient);
