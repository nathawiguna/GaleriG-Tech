import './navbar.css';
import Navbar from './components/navbar';
import Intro from './components/Intro';
import Latdas from './components/LATDAS';
import Ephotech from './components/EPHOTECH'
import Party from './components/party';
import Footer from './components/footer'

const currentTime = new Date();
const currentHour = currentTime.getHours();
const isMorning = currentHour >= 6 && currentHour < 18;
const ContainerClassName = `container-1 ${isMorning ? 'intro-morning-background' : 'intro-night-background'}`

function App() {
  return (
    <div className="App">
      <div className={ContainerClassName}>
        <Navbar/>
        <Intro/>
      </div>
      <Latdas/>
      <Ephotech/>
      <Party/>
      <Footer/>
    </div>
  );
}

export default App;
