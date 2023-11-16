import './App.scss';
import { Route, Routes } from 'react-router-dom'
import Layout from './componenets/Layout/index';
import Home from './componenets/Home';

function App() {
  return (
    <div className="App">
    <Routes>

      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
      </Route>
    </Routes>
    </div>
  );
}

export default App;
