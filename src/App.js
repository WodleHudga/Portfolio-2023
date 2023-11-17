import './App.scss';
import { Route, Routes } from 'react-router-dom'
import Layout from './componenets/Layout/index';
import Home from './componenets/Home';
import About from './componenets/About';
import Contact from './componenets/Contact';
function App() {
  return (
    <div className="App">
    <Routes>

      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
    </div>
  );
}

export default App;
