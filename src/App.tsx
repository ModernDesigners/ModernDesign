import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import Navbar from "./components/Navbar";
import Footer from "./pages/home/components/Footer";
import Home from "./pages/home/Home";
import { createContext, useState } from "react";
import ShowProjectImages from "./components/ShowProjectImages";
import { Route, Routes } from "react-router-dom";
import CurrentProject from "./pages/CurrentProject/CurrentProject";

type TUserContext = {
  navActive: number;
  setNavActive: React.Dispatch<React.SetStateAction<number>>;
  activeProject: {
    images: string[];
    name: null | string;
  };
  setactiveProject: React.Dispatch<
    React.SetStateAction<{
      images: string[];
      name: null | string;
    }>
  >;
};

export const userContext = createContext<TUserContext | null>(null);

function App() {
  const [isShowImagesActive, setIsShowImagesActive] = useState(false);
  const [navActive, setNavActive] = useState(0);
  const [activeProject, setactiveProject] = useState<{
    images: string[];
    name: null | string;
  }>({
    images: [],
    name: null,
  });

  return (
    <userContext.Provider
      value={{ navActive, setNavActive, activeProject, setactiveProject }}
    >
      <Navbar />
      {/* <Home
        setShowImages={setShowImages}
        setIsShowImagesActive={setIsShowImagesActive}
      /> */}

      <Routes>
        <Route path="/">
          <Route
            index
            element={<Home setIsShowImagesActive={setIsShowImagesActive} />}
          />
          <Route
            path="Home"
            element={<Home setIsShowImagesActive={setIsShowImagesActive} />}
          />
          <Route
            path="Projects"
            element={
              <ProjectsPage setIsShowImagesActive={setIsShowImagesActive} />
            }
          />
          <Route
            path="Projects/:ProjectName"
            element={
              <CurrentProject setIsShowImagesActive={setIsShowImagesActive} />
            }
          />
        </Route>
      </Routes>

      <ShowProjectImages
        isShowImagesActive={isShowImagesActive}
        setIsShowImagesActive={setIsShowImagesActive}
      />
      {/* <Footer /> */}
    </userContext.Provider>
  );
}

export default App;
