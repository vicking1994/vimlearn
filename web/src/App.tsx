import './App.css'
import { Outlet } from 'react-router-dom'
import { Sidebar } from './components/Sidebar'

function App() {
  return (
    <div className="appShell">
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default App
