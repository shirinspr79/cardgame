import { Route, Routes} from 'react-router-dom'
import  Main  from './components/Main'
import { Game } from './containers/Game';
import { About } from './containers/About';
import { CustomNavbar } from './components/Navbar';



<meta name="viewport" content="width=device-width, initial-scale=1"> </meta>

export default function App(){
  
  return(
   <>
   
      <CustomNavbar />
      <Routes> 
        <Route path='/' element={<Main />} />
        <Route path='/main' element={<Main />} />
        <Route path='/game' element={<Game />} />
        <Route path='/about' element={<About />} />
      </Routes>
  </>);
}
