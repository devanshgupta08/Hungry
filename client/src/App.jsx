import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import { About, Home, Login } from './pages';

const App = () => {
  return (
    <main className="bg-slate-300/20">
      <Router>
        <AppContent />
      </Router>
    </main>
  );
};

const AppContent = () => {
  const location = useLocation();

  // Check if the current location is '/login'
  const isLoginPage = location.pathname === '/login';

  return (
    <>
      {/* Render Navbar if location is not '/login' */}
      {!isLoginPage && <Navbar />}
      
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
