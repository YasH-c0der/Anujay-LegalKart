import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Pages
import Home from './pages/Home';
import Property from './pages/Property';
import Documentation from './pages/Documentation';
import Startup from './pages/Startup';
import Citation from './pages/Citation';
import Blogs from './pages/Blogs';

function App() {
  return (
    <Router>
      <div className="font-poppins">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/property" element={<Property />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/startup" element={<Startup />} />
          <Route path="/citation" element={<Citation />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
