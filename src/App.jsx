import './App.css'
import { BrowserRouter } from 'react-router-dom'
import UserRegister from './components/UserRegister/UserRegister'

function App() {
  return (
    <BrowserRouter>
      <UserRegister />
    </BrowserRouter>
  )
}

export default App
