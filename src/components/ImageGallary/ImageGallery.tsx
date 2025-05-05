import ImageCard from "./ImageCart/ImageCard";
import { ImageType } from "../../services/types"; // глобальный тип

interface Props {
    images: ImageType[];
    onImageClick: (image: ImageType) => void;
}

function ImageGallery({ images, onImageClick }: Props) {
    return (
        <ul style={{ listStyle: "none", padding: 0 }}>
            {images.map((image) => (
                <ImageCard key={image.id} image={image} onImageClick={onImageClick} />
            ))}
        </ul>
    );
}

export default ImageGallery;
