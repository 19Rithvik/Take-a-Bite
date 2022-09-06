import './App.css';
import Menu from './Menu'
import Home from './Home';
import Navbar from './Navbar';
import {Route,Routes} from "react-router-dom"
import Footer from './Footer';
import About from './About';
import Contact from './Contact';

function App() {
  return (
          <div className='App'>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/menu" element={<Menu />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
              </Routes>
              <Footer/>
          </div>
  );
}

export default App;
