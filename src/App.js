import './App.scss';
import { Route, Routes } from 'react-router-dom'
import Layout from './componenets/Layout/index';
import Home from './componenets/Home';
import About from './componenets/About';

function App() {
  return (
    <div className="App">
    <Routes>

      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
    </div>
  );
}

export default App;
