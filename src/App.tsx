import {JSX, useEffect, useState} from 'react';
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import ImageGallery from "./components/ImageGallary/ImageGallery";
import { FetchData } from "./services/api";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import toast from "react-hot-toast";
import ImageModal from "./components/ImageModal/ImageModal";
import { ImageType } from './services/types';

function App(): JSX.Element {
    const [images, setImages] = useState<ImageType[]>([]);
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState('');
    const [isError, setIsError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);

    useEffect(() => {
        if (!query.trim()) return;

        const getData = async () => {
            try {
                setLoading(true);
                setIsError(false);
                const data = await FetchData({ page, query });
                setImages(prev => [...prev, ...data]);
            } catch (error) {
                toast.error("Error fetching images");
                setIsError(true);
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, [page, query]);

    const handleChangeQuery = (query: string) => {
        setQuery(query);
        setPage(1);
        setImages([]);
    };

    const handleImageClick = (image: ImageType) => {
        setSelectedImage(image);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    return (
        <>
            <SearchBar handleChangeQuery={handleChangeQuery} />
            {isError && <p style={{ color: "red" }}>Failed to fetch images. Please try again.</p>}
            <ImageGallery images={images} onImageClick={handleImageClick} />
            {loading && <Loader />}
            {!loading && images.length > 0 && (
                <LoadMoreBtn loadmore={() => setPage(prev => prev + 1)} />
            )}
            {selectedImage && (
                <ImageModal key={selectedImage.id} image={selectedImage} onClose={handleCloseModal} />
            )}
        </>
    );
}

export default App;
