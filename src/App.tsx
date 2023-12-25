import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import Navbar from "./components/Navbar";
import Footer from "./pages/home/components/Footer";
import Home from "./pages/home/Home";
import { createContext, useState } from "react";
import ShowProjectImages from "./components/ShowProjectImages";
import { Route, Routes } from "react-router-dom";
import CurrentProject from "./pages/CurrentProject/CurrentProject";

export const userContext = createContext<any>(null);

function App() {
  const [showImages, setShowImages] = useState(null);
  const [isShowImagesActive, setIsShowImagesActive] = useState(false);
  const [currentProject, setCurrentProject] = useState<any>(null);
  const [navActive, setNavActive] = useState(0);

  return (
    <userContext.Provider value={{ navActive, setNavActive }}>
      <Navbar />
      {/* <Home
        setShowImages={setShowImages}
        setIsShowImagesActive={setIsShowImagesActive}
      /> */}

      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <Home
                setCurrentProject={setCurrentProject}
                setShowImages={setShowImages}
                setIsShowImagesActive={setIsShowImagesActive}
              />
            }
          />
          <Route
            path="Home"
            element={
              <Home
                setCurrentProject={setCurrentProject}
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
    </userContext.Provider>
  );
}

export default App;
