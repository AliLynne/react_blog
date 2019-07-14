import React from 'react'
import ReactMarkdown from 'react-markdown';

const BlogListItem = (props) => {
  const post = props.entry.fields
  console.log(post)
  return (
    <div className="container">
      <li className="card">
        <div className="card-content">
          <h3 className="center">{post.title}</h3>
          <blockquote>{post.description}</blockquote>
          <ReactMarkdown source={post.body} />
        </div>
        
      </li>
      
    </div>
  )
}

export default BlogListItem
