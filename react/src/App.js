import logo from './logo.svg';
import './App.css';
import{Routes,Route}from "react-router-dom"
import Mypage from './page/Mypage';
import Hom from './components/Hom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hom/>}/>
      <Route path="/c" element={<Mypage/>}/>
    </Routes>
  );
}

export default App;
