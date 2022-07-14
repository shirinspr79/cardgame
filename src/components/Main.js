import { Navbar  } from './components/Navbar'
import { Route, Routes } from "react-router-dom"
import App from './App';

export default function Main() {
    return (
    <>
    <Navbar />
    <Routes> 
      <Route path='/' component={<App />} />
      <Route path='Main' component={<Main />} />
    </Routes>
    </>
    )
  }