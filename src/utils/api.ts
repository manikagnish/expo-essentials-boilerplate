import axios from "axios";

const API_BASE_URL = "https://your-api-domain.com/api";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export const makeRequest = async (
  endpoint: string,
  params: Record<string, any> = {}
) => {
  try {
    const response = await apiClient.get(endpoint, { params });
    return response.data;
  } catch (error) {
    console.error("API request failed:", error);
    throw error;
  }
};
