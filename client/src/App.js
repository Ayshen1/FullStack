import { Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import Authors from './pages/Authors';
import AddAuthor from './pages/AddAuthor';
import AuthorDetail from './pages/AuthorDetail';
import EditAuthor from './pages/EditAuthor';
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Contac from "./pages/Contac";


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/concat" element={<Contac/>} />
    <Route path="/Authors" element={<Authors/>} />
    <Route path="/AddAuthor" element={<AddAuthor/>} />
    <Route path="/AuthorDetail " element={<AuthorDetail/>} />
    <Route path="/EditAuthor " element={<EditAuthor/>} />
  </Routes>
  <Footer/>
    </>
  );
}

export default App;
