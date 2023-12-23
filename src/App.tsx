import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import Navbar from "./components/Navbar";
import Footer from "./pages/home/components/Footer";
import Home from "./pages/home/Home";
import { useState } from "react";
import ShowProjectImages from "./components/ShowProjectImages";

function App() {
  const [showImages, setShowImages] = useState(null);
  const [isShowImagesActive, setIsShowImagesActive] = useState(false);

  return (
    <>
      <Navbar />
      {/* <Home /> */}
      <ProjectsPage
        setShowImages={setShowImages}
        setIsShowImagesActive={setIsShowImagesActive}
      />
      <ShowProjectImages
        isShowImagesActive={isShowImagesActive}
        setIsShowImagesActive={setIsShowImagesActive}
      />
      <Footer />
    </>
  );
}

export default App;
