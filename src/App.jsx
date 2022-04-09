import { Link, Routes, Route } from 'react-router-dom';
import Greetings from './components/Greetings';
import './App.css';

const App = () => (
  <>
    <Link to="/greeting" className="link">
      greeting
    </Link>

    <Routes>
      <Route path="/greeting" element={<Greetings />} />
    </Routes>
  </>
);

export default App;
