
import './App.css';
import { Home } from './Component/Home';
// import { Search } from './Component/Search';
import { SingleMovie } from './Component/SingleMovie';
// import { Movies } from './Component/Movies';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Error } from './Component/Error';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='movie/:id' element={<SingleMovie/>}/>
      <Route path='*' element={<Error/>}/>

    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
