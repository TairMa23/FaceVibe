import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Feedback from "./pages/Feedback/Feedback";
import PreferenceGallery from "./pages/PreferenceGallery/PreferenceGallery";
<<<<<<< HEAD
import FAButton from "./components/FAButton/FAButton";  
=======
import WhatsappButton from "./components/WhatsappButton/WhatsappButton";

>>>>>>> e6a9e4a09979a0a7172943bcf036f15d85b8ac03
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
          <Route path="/Feedback" element={<Feedback />} />
        </Routes>
        <FAButton />
      </div>
    </>
  );
}

export default App;
