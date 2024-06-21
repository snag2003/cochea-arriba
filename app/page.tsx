import NavBar from './components/NavBar';
import About from './pages/About';
import Weather from './pages/Weather';
import Irrigation from './pages/Irrigation';
import Contact from './pages/Contact';

export default function Home() {
  return (
    <div>
      <NavBar />
      <About/>
      <Weather/>
      <Irrigation/>
      <Contact/>
    </div>
  );
}