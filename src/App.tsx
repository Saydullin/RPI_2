import './App.css';
import { DailySubject } from './pages/main/DailySubject';
import { Developers } from './pages/main/Developers';
import { Hero } from './pages/main/Hero';
import { Provider } from 'react-redux'

function App() {
  return (
    <>
      <Hero />
      <DailySubject />
      <Developers />
    </>
  );
}

export default App;


