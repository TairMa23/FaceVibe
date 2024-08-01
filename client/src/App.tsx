import React, { useEffect } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import PreferenceGallery from "./pages/PreferenceGallery/PreferenceGallery";
import WhatsappButton from "./components/WhatsappButton/WhatsappButton";

import { useEmotionStore } from "./store/useEmotionStore";

function App() {
  const { loadDetector, detectorLoaded, initSocket, disconnectSocket } =
    useEmotionStore();

  useEffect(() => {
    loadDetector();
    initSocket();

    return () => {
      disconnectSocket();
    };
  }, [loadDetector, initSocket, disconnectSocket]);

  if (!detectorLoaded) {
    console.log("Loading FER detector...");
  } else {
    console.log("FER detector loaded successfully");
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
        <WhatsappButton />
      </div>
    </>
  );
}

export default App;
