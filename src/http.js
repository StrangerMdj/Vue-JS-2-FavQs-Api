import axios from 'axios';

export const HTTP = axios.create({
  baseURL: `https://favqs.com/api/`,
  headers: {
    Authorization: 'Bearer ca21fa32aa39e1928c1f82ca410220c7'
  }
})