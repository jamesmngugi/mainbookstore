import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,  
} from 'react-router-dom';

import Navbar from './component/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import CreatePost from './pages/CreatePost'; // Import CreatePost component
import Postdetails from './pages/Postdetails'; // Import Postdetails component
import Getdata from './pages/Getdata'; // Import Getdata instead of raw Post
import Footer from './component/Footer'; // Import Footer component
import Notfound from './pages/Notfound'; // Import Notfound component
function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />         
            <Route path="/post" element={<Getdata />} />
            <Route path="/post/:id" element={<Postdetails />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route
              path="*"
              element={<Notfound />}
            />
          </Routes>
        </main>
        <Footer /> 
      </div>
    </BrowserRouter>
  );
}

export default App;