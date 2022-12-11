import axios from 'axios';

import { ApiServerRoot } from '../Config/generateApiRoute';

function createInstance() {
  const api = axios.create({
    baseURL: ApiServerRoot,
  });
  api.interceptors.response.use(
    response => {
      const { data } = response;
      const { data: result } = data
      return result
    },
    error => {
      if (error) {
        console.log('[ERROR] -> ', error)
      }
      return error;
    },
  );

  return api;
}
export const getInstance = () => {
  return createInstance();
};
export default function* () {
  return createInstance();
}
