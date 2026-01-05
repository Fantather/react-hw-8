import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import UserRegister from './components/UserRegister/UserRegister'
import Tabs from './components/Tabs/Tabs'
import ThemeProvider from './components/ThemeProvider/ThemeProvider'
import Shop from './components/Shop/Shop'

const routes = [
  '/task1',
  '/task2',
  '/task3',
  '/task4',
  '/task5',
]

function App() {
  return (
    <BrowserRouter>
    <header>
        <Link to={routes[0]} >Задание 1</Link>
        <Link to={routes[1]} >Задание 2</Link>
        <Link to={routes[2]} >Задание 3</Link>
        <Link to={routes[3]} >Задание 4</Link>
        <Link to={routes[4]} >Задание 5</Link>
      </header>
      <Routes>
        <Route path={routes[0] + "/*"} element={<UserRegister />} ></Route>
        <Route path={routes[1]} element={<Tabs />} ></Route>
        <Route path={routes[2]} element={<ThemeProvider />} ></Route>
        <Route path={routes[3] + "/*"} element={<Shop />} ></Route>
        <Route path={routes[4]} element={<UserRegister />} ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
