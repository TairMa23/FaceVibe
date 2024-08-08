import React, { useEffect } from "react";
import axios from "axios";
import { useImageStore, ImageItem } from "../../store/useStore";

const DataFetching: React.FC = () => {
  const setImages = useImageStore((state) => state.setImages);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/furniture");
        console.log("sucsses load api/furniture");

        const imageItems = response.data.furniture.map((item: ImageItem) => ({
          id: item.id,
          name: item.name,
          url: item.url,
          color: item.color,
          category: item.category,
          style: item.style,
          dimensions: item.dimensions,
          material: item.material,
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
