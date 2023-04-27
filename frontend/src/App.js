import './App.css';
import Navbar from './components/nav/nav';
import Home from './components/home/home';
import About from './components/about/about';
import Login from './components/login/login';
import Destination from './components/destination/destination';
import CreateBlog from './components/create_blog/createblog';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CurrentUserProvider from './contexts/CurrentUser';

function App() {
  return (
    <div className="App">
      <CurrentUserProvider>
        <Navbar />
        <Router>
          <Routes>
            <Route path="/home" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/destination" element={<Destination/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/createblog" element={<CreateBlog/>} />
          </Routes>
        </Router>
      </CurrentUserProvider>

    </div>
  );
}

export default App;