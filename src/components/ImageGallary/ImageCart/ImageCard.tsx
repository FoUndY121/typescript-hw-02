import React from 'react';
import { ImageType } from '../../../services/types';

interface Props {
    image: ImageType;
    onImageClick: (image: ImageType) => void;
}

function ImageCard({ image, onImageClick }: Props) {
    return (
        <li style={{ marginBottom: "20px" }}>
            <img
                src={image.urls.small}
                alt={image.alt_description || "Unsplash Image"}
                style={{ width: "200px", borderRadius: "8px", cursor: "pointer" }}
                onClick={() => onImageClick(image)}
            />
        </li>
    );
}

export default ImageCard;
