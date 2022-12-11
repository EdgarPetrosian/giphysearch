import { getInstance } from './client';
const params = {
  api_key: "0qc40Qx0l2GXQVvCxMDxrpNAV2qtmMmp",
  limit: 25,
  offset: 0,
  rating: 'pg',
  lang: 'en',
}
// Requesting GIFs data by search query
export const getGiphsDataApi = function (param) {
  params.q = param.query
  const cl = getInstance();
  //NOTE: search query
  return cl.get('search', { params });
};
// Requesting GIFs data randomly
export const getGiphsRandomDataApi = function () {
  const cl = getInstance();
  return cl.get('random', { params });
};