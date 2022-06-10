import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from '../src/Pages/Home/home';
import About from '../src/Pages/About/about';
import Contact from '../src/Pages/Contact/contact';

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    );
}

export default App;
