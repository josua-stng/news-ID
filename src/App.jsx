import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import Sports from './routes/Sports'

function App() {
  return (
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sports' element={<Sports/>}/>
      </Routes>
  )
}

export default App
