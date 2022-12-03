import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home"
import Contact from "./Routes/Contact"
import Detail from "./Routes/Detail"
import Favs from "./Routes/Favs"
import ThemeProvider from "./Components/utils/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/contacto" element={<Contact/>}/>
            <Route path="/dentista/:id" element={<Detail/>}/>
            <Route path="/favs" element={<Favs/>}/>
          </Routes>
        <Footer/>
        
      </div>
      </ThemeProvider>
  );
}

export default App;
