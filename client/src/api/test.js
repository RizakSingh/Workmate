import axios from "axios";

export const pingBackend = async () => {
  const res = await axios.get("http://localhost:5000/health");
  return res.data;
};
