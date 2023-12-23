import { Box } from '@mui/material';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ExerciseDetails from './pages/ExerciseDetails';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
<Box width="400px">
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/exercise/:id" element={<ExerciseDetails/>}/>
    

  </Routes>
  <Footer/>
</Box>
  );
}

export default App;
