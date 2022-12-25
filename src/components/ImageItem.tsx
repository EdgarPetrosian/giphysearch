// @ts-ignore
const ImageItem = ({ url, key, width, height }): JSX.Element => {
    return <div className='img'><img key={key} src={url} width={width} height={height}  alt="Gif animation"/></div>
}

export default ImageItem;
