import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Feedback from "./pages/Feedback/Feedback";
import PreferenceGallery from "./pages/PreferenceGallery/PreferenceGallery";
import FAButton from "./components/FAButton/FAButton";
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
          <Route path="/Feedback" element={<Feedback />} />
        </Routes>
        <FAButton />
      </div>
    </>
  );
}

export default App;
