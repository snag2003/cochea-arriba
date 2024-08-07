"use client"; 

import NavBar from './components/NavBar';
import About from './pages/About';
import Weather from './pages/Weather';
import Irrigation from './pages/Irrigation';
import Contact from './pages/Contact';
import ProtectedRoute from './components/ProtectedRoute';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div>
      <NavBar />
      <About />
      <Weather />
      <ProtectedRoute>
        <Irrigation />
      </ProtectedRoute>
      <Contact />
      <Footer />
    </div>
  );
}
