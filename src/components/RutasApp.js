import { HashRouter, Route, Router, Routes } from 'react-router-dom'
import CaracteristicasGramatica from '../pages/CaracteristicasGramatica'
import Header from './Header'
import Home from '../pages/Home'
import Variables from '../pages/Variables'
import CadenasTexto from '../pages/CadenasTexto'
import Constantes from '../pages/Constantes'
import Numeros from '../pages/Numeros'
import TemplatesStrings from '../pages/TemplatesStrings'
import DarkMode from './DarkMode'
import { ThemeProvider } from '../context/ThemeContext'
import UndefinedNullNaN from '../pages/ValoresIndefinidos'
import ValoresIndefinidos from '../pages/ValoresIndefinidos'
import Boleans from '../pages/Boleans'


const RutasApp = () => {

  return (
    <div>
      <HashRouter>
        {' '}
        <ThemeProvider>
          <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/CaracteristicasGramatica" element={<CaracteristicasGramatica />}/>
            <Route path="/Variables" element={<Variables />}></Route>
            <Route path="/CadenasTexto" element={<CadenasTexto />}></Route>
            <Route path="/Constantes" element={<Constantes />}></Route>
            <Route path="/Numeros" element={<Numeros />}></Route>
            <Route path="/TemplatesStrings" element={<TemplatesStrings />}></Route>
            <Route path="ValoresIndefinidos" element={<ValoresIndefinidos/>}></Route>
            <Route path="/TemplatesStrings" element={<TemplatesStrings />}></Route>
            <Route path="/Boleans" element={<Boleans/>}></Route>
          </Routes>
        </ThemeProvider>
      </HashRouter>
    </div>
  )
}

export default RutasApp
