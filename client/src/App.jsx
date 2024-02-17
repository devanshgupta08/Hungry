import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import { About, Home, Login,Register} from './pages';
import Footer from './components/footer';
import DFood from './pages/DFood';
import RFood from './pages/RFood';
import Logout from './pages/Logout';

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
  const isLoginPage = location.pathname === '/login' || location.pathname === "/register"|| location.pathname === "/logout";

  return (
    <>
      {/* Render Navbar if location is not '/login' */}
      {!isLoginPage && <Navbar />}
      
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/DFood' element={<DFood />} />
        <Route path='/RFood' element={<RFood />} />
        <Route path='/logout' element={<Logout />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
