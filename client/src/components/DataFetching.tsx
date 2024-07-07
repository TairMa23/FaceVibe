import React, { useEffect } from "react";
import axios from "axios";

interface DataFetchingProps {
  onFetchSuccess: (fetchedImages: string[]) => void;
}

const DataFetching: React.FC<DataFetchingProps> = ({ onFetchSuccess }) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/furniture");
        const imageUrls = response.data.furniture.map((item: any) => item.url);
        onFetchSuccess(imageUrls);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return null;
};

export default DataFetching;
