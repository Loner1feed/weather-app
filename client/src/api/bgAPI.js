import axios from "axios"

export const bgAPI = {
  getImage: async () => {
    const res = await axios.get('https://bing.ioliu.cn/v1/rand ');
    return res.data;
  }
}