import React, { useEffect } from "react";
import axios from "axios";
import { useImageStore } from "../../store/useStore";

const DataFetching: React.FC = () => {
  const setImages = useImageStore((state) => state.setImages);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/furniture");
        const imageItems = response.data.furniture.map((item: any) => ({
          id: item.id, // נניח שיש שדה id לכל פריט
          url: item.url,
        }));
        setImages(imageItems);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [setImages]);

  return null;
};

export default DataFetching;
