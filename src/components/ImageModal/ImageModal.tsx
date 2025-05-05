import { useEffect } from 'react';
import Modal from 'react-modal';

interface Image {
    urls: {
        regular: string;
    };
    alt_description?: string;
}

interface Props {
    image: Image | null;
    onClose: () => void;
}

const ImageModal = ({ image, onClose }: Props) => {
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    if (!image?.urls?.regular) return null;

    return (
        <Modal
            isOpen={!!image}
            onRequestClose={onClose}
            overlayClassName="overlay"
            className="modal"
        >
            <img src={image.urls.regular} alt={image.alt_description || "image"} />
        </Modal>
    );
};

export default ImageModal;
