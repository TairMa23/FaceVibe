import "./App.css";
import { useRunningStore, useImageStore } from "./store/useStore";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import PreferenceGallery from "./pages/PreferenceGallery/PreferenceGallery";

function App() {
  return (
      <div>
         

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
