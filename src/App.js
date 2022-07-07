import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home/Home"
import useUser from "./components/useUser"
import Login from "./components/Login/Login"

function App() {
  const { user, setUser } = useUser()

  if (!user?.access_token) {
    return <Login setUser={setUser} />
  }

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
