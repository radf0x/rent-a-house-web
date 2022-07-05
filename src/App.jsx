// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Listing from './components/Listing/Listing';
import useUser from './components/useUser';
import Login from './components/Login/Login';

function App() {
  const {user, setUser} = useUser();

  if(!user?.access_token) {
    return <Login setUser={setUser} />
  }

  return (
    <div className="wrapper">
        <h1> Marketplace App </h1>
        <BrowserRouter>
          <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/listings" element={<Listing />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
