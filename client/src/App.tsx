import React, { useEffect } from "react";
import "./App.css";

import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import PreferenceGallery from "./pages/PreferenceGallery/PreferenceGallery";
import { useEmotionStore } from "./store/useEmotionStore";

function App() {
  const { loadFaceCascade, faceCascadeLoaded, initSocket, disconnectSocket } =
    useEmotionStore();

  useEffect(() => {
    loadFaceCascade();
    initSocket();

    return () => {
      disconnectSocket();
    };
  }, [loadFaceCascade, initSocket, disconnectSocket]);
  if (!faceCascadeLoaded) {
    console.log("Loading face cascade classifier...");
  } else {
    console.log("Face cascade classifier loaded successfully");
  }
  return (
    <>
      <div>
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: "#fff",
              color: "#111827",
            },
          }}
        />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/preferenceGallery" element={<PreferenceGallery />} />
        </Routes>
      </div>
      <Toaster />
    </>
  );
}

export default App;
