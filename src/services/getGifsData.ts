import { getInstance } from './client';
const params = {
  api_key: "0qc40Qx0l2GXQVvCxMDxrpNAV2qtmMmp",
  limit: 25,
  offset: 0,
  rating: 'pg',
  lang: 'en',
  q: undefined
}
// Requesting GIFs data by search query
export const getGifsDataApi = function (param: { query: any; }) {
  params.q = param.query
  const cl = getInstance();
  //NOTE: search query
  return cl.get('search', { params });
};
// Requesting GIFs data randomly
export const getGifsRandomDataApi = function () {
  const cl = getInstance();
  return cl.get('random', { params });
};
