import axios from "axios";

const API_KEY = "JyRlHPp1_-__aSAWudi1-wBqzueS-I5nlwOFso3ml6s";

interface FetchParams {
    query: string;
    page?: number;
}

interface Image {
    id: string;
    urls: {
        small: string;
        regular: string;
    };
    alt_description?: string;
}

export const FetchData = async ({ query, page = 1 }: FetchParams): Promise<Image[]> => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
        params: {
            client_id: API_KEY,
            query,
            page,
            per_page: 12,
        },
    });

    return response.data.results;
};
