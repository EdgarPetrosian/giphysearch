export interface IImageItem {
  url: string;
  key: string;
  width: number | string;
  height: number | string;
  hash: string;
};

export type TFetchParams = {
  query: string
}