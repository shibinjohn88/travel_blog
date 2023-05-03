import './App.css';
import Navbar from './components/nav/nav';
import Home from './components/home/home';
import About from './components/about/about';
import Login from './components/login/login';
import Signup from './components/login/signup';
import Show from './components/show_blog/show';
import Destination from './components/destination/destination';
import CreateBlog from './components/create_blog/createblog';
import BlogList from './components/create_blog/bloglist';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CurrentUserProvider from './contexts/CurrentUser';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <CurrentUserProvider>
        <Navbar />
        <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/destination" element={<Destination/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/createblog" element={<CreateBlog/>} />
            <Route path="/show_blog/:id" element={<Show/>} />
            <Route path="/bloglist" element={<BlogList/>} />
          </Routes>
        </Router>
        <Footer />
      </CurrentUserProvider>

    </div>
  );
}

export default App;