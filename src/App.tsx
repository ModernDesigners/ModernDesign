import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import Navbar from "./components/Navbar";
import Footer from "./pages/home/components/Footer";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      <ProjectsPage />
      <Footer />
    </>
  );
}

export default App;
