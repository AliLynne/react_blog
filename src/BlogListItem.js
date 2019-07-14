import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown/with-html';
import htmlParser from 'react-markdown/plugins/html-parser';

class BlogListItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      post: this.props.entry.fields,
      htmlParser: null
    }
  }
  
  

  
  render() {
    const post = this.state.post
    console.log(post)
    return (
      <div className="container">
        <li className="card">
          <div className="card-content">
            <img className="responsive-img" src={post.heroImage.fields.file.url} alt="hero"/>
            <h3 className="center">{post.title}</h3>
            <blockquote>{post.description}</blockquote>
            <ReactMarkdown source={post.body} />
          </div>
          
        </li>
        
      </div>
    )
  }
  
}

export default BlogListItem
