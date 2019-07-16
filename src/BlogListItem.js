import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown/with-html';
import { Link } from 'react-router-dom';

class BlogListItem extends Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      post: this.props.entry.fields,
      id: this.props.entry.sys.id
    }
  }
  
  

  
  render() {
    const post = this.state.post
    const URL = `/blog/${this.state.id}`
    console.log(this.state.id)
    return (
      <div className="container">
        <li className="card">
          
          <div className="card-content">
            <div className="card-image ">
              <img className="responsive-img hero" src={post.heroImage.fields.file.url} alt={post.heroImage.fields.description}/>
            </div>
            <div className="card-content">
              <h3 className="center"><Link to={URL}>{post.title}</Link></h3>
              <blockquote>{post.description}</blockquote>
              <ReactMarkdown source={post.body} />
            </div>
            
          </div>
          
        </li>
        
      </div>
    )
  }
  
}

export default BlogListItem
