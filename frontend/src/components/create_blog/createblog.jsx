import './createblog.css'
import {useState} from "react"

function CreateBlog () {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [country, setCountry] = useState('')
    const [place, setPlace] = useState('')

    function newBlog () {
        console.log('post a form')
    }


    return (
        <div className="form-new-blog">
            <form onSubmit={newBlog} >
                <input type="text"
                placeholder={'Give a title for the blog'}
                onChange={element => setTitle(element.target.value)} /> 
            </form>
        </div>
        
    )
}

export default CreateBlog
