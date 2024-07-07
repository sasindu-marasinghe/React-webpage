import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './Header';
import About from './About';
import Home from './home';
import Contact from './Contact';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
        <div className='App'>
            <Router>
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
            </Router>
        </div>
    );
};

export default App;
