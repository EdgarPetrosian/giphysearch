import { IImageItem } from "../types";

const ImageItem = ({ url, key, width, height }): IImageItem => {
    return <div className='img'><img key={key} src={url} width={width} height={height} /></div>
}

export default ImageItem;