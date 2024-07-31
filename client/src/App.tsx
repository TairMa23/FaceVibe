import "./App.css";
import { useRunningStore, useImageStore } from "./store/useStore";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import PreferenceGallery from "./pages/PreferenceGallery/PreferenceGallery";

function App() {
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
    </>
  );
}

export default App;
