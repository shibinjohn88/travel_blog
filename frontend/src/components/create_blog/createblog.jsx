import './createblog.css'
import {useState} from "react"
import { CountryDropdown} from "react-country-region-selector";
import bloggy from '../../images/bloggy.gif';
import logo from '../../images/logo.png';

function CreateBlog () {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('');
    const [country, setCountry] = useState('')
    const [place, setPlace] = useState('')
    const [article, setArticle] = useState('');
    const [author, setAuthor] = useState('');


    function newBlog () {
        console.log('post a form')
    }

    const CountryChange = (val) => {
        setCountry(val);
      };
   

    return (
        <div className="form-new-blog">
            
            <form onSubmit={newBlog} >
            <img  src={bloggy} alt="bloggy character" className="bloggy"/>
            <h1> Create a Blog </h1> 

       <div>
        <label htmlFor="title">Title:</label>
        <input type="text"
         id="title"
          placeholder={'Give a title for the blog'} 
          value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>

      <div>
        <label htmlFor="image">Image URL:</label>
        <input type="file" 
        id="image" 
        value={image}
        onChange={(e) => setImage(e.target.value)} />
      </div>

      <div>
        <label htmlFor="description">Description:</label>
        <textarea id="description" 
        value={description} 
        placeholder={'Describe the highlights of your trip'}
         onChange={(e) => setDescription(e.target.value)} />
      </div>

      <div>
        <label htmlFor="place">Place:</label>
        <input type="text"
         id="place"
          value={place}
          placeholder="Where did you go?" 
        onChange={(e) => setPlace(e.target.value)} />
      </div>

      <div>
      <label htmlFor="country">Country:</label>
      <CountryDropdown
        id="country"
        value={country}
        onChange={CountryChange}
        placeholder="Select a country"
      />
      </div>



      <div>
        <label htmlFor="article">Article:</label>
        <textarea id="article"
         value={article}
          placeholder={'blog about it'} 
          onChange={(e) => setArticle(e.target.value)} />
      </div>

      <div>
        <label htmlFor="author">Author:</label>
        <input type="text"
         id="author"
          value={author}
           placeholder={'Name of Adventurer'} 
           onChange={(e) => setAuthor(e.target.value)} />
      </div>
      <button type="submit">Submit</button>

            </form>
            <img  src={logo} alt="Logo" className="logo"/>
        </div>
        
    )
}

export default CreateBlog
