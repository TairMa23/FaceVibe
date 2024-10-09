import React, { useEffect } from "react";
import { useImageStore, ImageItem } from "../../store/useStore";
import axiosInstance from "../../store/axiosConfig";

const DataFetching: React.FC = () => {
  const setImages = useImageStore((state) => state.setImages);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(
          "/api/mongodb/products"
        );
        console.log("sucsses load api/mongodb/products");

        const imageItems = response.data.map((item: ImageItem) => ({
          _id: item._id,
          name: item.name,
          url: item.url,
          color: item.color,
          category: item.category,
          style: item.style,
          dimensions: item.dimensions,
          material: item.material,
        }));
        console.log(imageItems);

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
