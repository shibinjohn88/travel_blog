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

    


    async function newBlog (e) {

      console.log(image[0])
      e.preventDefault()

      const blogContent = new FormData()
      blogContent.set("blog_title", title)
      blogContent.set("file", image[0])
      blogContent.set("blog_description", description)
      blogContent.set("blog_place", place)
      blogContent.set("blog_article", article)
      blogContent.set("blog_country", country)

      const response = await fetch(`http://localhost:3001/api/blogs/`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
          body: blogContent
      })

      const data = await response.json()

      if (response.status === 200) {
        console.log(data)
      }
      else {
        console.log(`error ${data}`)
      }
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
        onChange={(e) => setImage(e.target.files)} />
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

      <button type="submit">Submit</button>

        </form>
            <img  src={logo} alt="Logo" className="logo"/>
        </div>
        
    )
}

export default CreateBlog
