import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import Navbar from "./components/Navbar";
import Footer from "./pages/home/components/Footer";
import Home from "./pages/home/Home";
import { useState } from "react";
import ShowProjectImages from "./components/ShowProjectImages";
import { Route, Routes } from "react-router-dom";
import CurrentProject from "./pages/CurrentProject/CurrentProject";

function App() {
  const [showImages, setShowImages] = useState(null);
  const [isShowImagesActive, setIsShowImagesActive] = useState(false);
  const [currentProject, setCurrentProject] = useState<any>(null);

  return (
    <>
      <Navbar />
      {/* <Home
        setShowImages={setShowImages}
        setIsShowImagesActive={setIsShowImagesActive}
      /> */}

      <Routes>
        <Route path="ModernDesign">
          <Route
            index
            element={
              <Home
                setShowImages={setShowImages}
                setIsShowImagesActive={setIsShowImagesActive}
              />
            }
          />
          <Route
            path="Projects"
            element={
              <ProjectsPage
                setShowImages={setShowImages}
                setIsShowImagesActive={setIsShowImagesActive}
                setCurrentProject={setCurrentProject}
              />
            }
          />
          <Route
            path="Projects/:ProjectName"
            element={
              <CurrentProject
                setShowImages={setShowImages}
                setIsShowImagesActive={setIsShowImagesActive}
                setCurrentProject={setCurrentProject}
                currentProject={""}
              />
            }
          />
        </Route>
      </Routes>

      <ShowProjectImages
        isShowImagesActive={isShowImagesActive}
        setIsShowImagesActive={setIsShowImagesActive}
        currentProject={currentProject}
      />
      {/* <Footer /> */}
    </>
  );
}

export default App;
