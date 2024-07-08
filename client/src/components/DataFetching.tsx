import React, { useEffect } from "react";
import axios from "axios";
import { useImageStore } from "../store/useStore";

const DataFetching: React.FC = () => {
  const setImages = useImageStore((state) => state.setImages);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/furniture");
        const imageUrls = response.data.furniture.map((item: any) => item.url);
        setImages(imageUrls);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return null;
};

export default DataFetching;
