import React, { useEffect } from 'react';

interface DataFetchingProps {
    onFetchSuccess: (fetchedImages: string[]) => void;
}

const DataFetching: React.FC<DataFetchingProps> = ({ onFetchSuccess }) => {
    useEffect(() => {
        fetch('http://localhost:8080/api/furniture')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Data fetched from server:', data); // Debugging line
                const imageUrls = data.furniture.map((item: any) => item.url);
                onFetchSuccess(imageUrls);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [onFetchSuccess]);

    return null;
};

export default DataFetching;
