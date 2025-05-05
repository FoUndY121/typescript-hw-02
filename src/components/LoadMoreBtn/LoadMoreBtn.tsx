interface Props {
    loadmore: () => void;
}

function LoadMoreBtn({ loadmore }: Props) {
    return <button onClick={loadmore}>Load More</button>;
}

export default LoadMoreBtn;
