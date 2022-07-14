import { Route, Routes} from 'react-router-dom'
import  Main  from './components/Main'
import { Game } from './containers/Game';
import { CustomNavbar } from './components/Navbar'
 
export default function App(){
  return(
   <>
      {/* <CustomNavbar /> */}
      <Routes> 
        <Route path='/game' element={<Game />} />
        <Route path='/' element={<Main />} />
      </Routes>
    </>);
}