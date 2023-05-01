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
    const [showMessage, setShowMessage] = useState(false);
    const [imageURL, setImageURL] = useState('');



    


    async function newBlog (e) {
      e.preventDefault()
      setShowMessage(true);


      console.log(image[0])
      e.preventDefault()

      const blogContent = new FormData()
      blogContent.set("blog_title", title)
      blogContent.set("file", image[0])
      blogContent.set("blog_description", description)
      blogContent.set("blog_place", place)
      blogContent.set("blog_article", article)
      blogContent.set("blog_country", country)

      const response = await fetch(`/api/blogs/`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
          body: blogContent
      })

      const data = await response.json()

      if (response.status === 200) {
        console.log(data);
        setImageURL(data.blog_image_url);
      }
      else {
        console.log(`error ${data}`)
      }
    }


    const CountryChange = (val) => {
      setCountry(val);

  };

  const handleTitleChange = (e) => {
      setTitle(e.target.value);

  };

  const handlePlaceChange = (e) => {
    setPlace(e.target.value);
  };

  const handleArticleChange = (e) => {
      setArticle(e.target.value);

  };

    return (
        <div className="form-new-blog">
            {showMessage ? (
        <div className="blog_card">
          <h2>Your blog has been posted!</h2>
          <p>Title: {title}</p>
          <p>Place: {place}</p>
          <p>Country: {country}</p>
          <p>Article: {article}</p>
          {imageURL && <img src={imageURL} alt="Blog post" />}
        </div>
      ) : (
            <form className="blog_form" onSubmit={newBlog} >
            <img  src={bloggy} alt="bloggy character" className="bloggy"/>
            <h1> Create a Blog </h1> 

       <div>
        <label htmlFor="title">Title<span className="required">*</span>:</label>
        <input type="text"
         id="title"
          placeholder={'Give a title for the blog'} 
          value={title}
          onChange={handleTitleChange}
          />
      </div>

      <div>
        <label htmlFor="image">Image URL<span className="required">*</span>:</label>
        <input type="file" 
        onChange={(e) => setImage(e.target.files)} />
      </div>

      <div>
        <label htmlFor="description">Description:</label>
        <textarea id="description" 
        value={description} 
        placeholder={'Describe the highlights of your trip'}
         onChange={(e) => setDescription(e.target.value)} />
      </div>
      <br />
<br />

      <div>
        <label htmlFor="place">Place:</label>
        <input type="text"
         id="place"
          value={place}
          placeholder="Where did you go?" 
          onChange={handlePlaceChange} />
      </div>

      <div>
      <label htmlFor="country">Country<span className="required">*</span>:</label>
      <CountryDropdown
        id="country"
        value={country}
        onChange={CountryChange}
        placeholder="Select a country"
      />
      </div>

<br />
<br />

      <div className='article'>
        <label htmlFor="article">Article<span className="required">*</span>:</label>
        <textarea id="article"
         value={article}
          placeholder={'blog about it'} 
          onChange={handleArticleChange} />
      </div>

      <button type="submit">Submit</button>

        </form>
        )}
            <img  src={logo} alt="Logo" className="logo"/>
        </div>
        
    )
}

export default CreateBlog
