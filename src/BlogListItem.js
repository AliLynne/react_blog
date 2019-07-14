import React from 'react'
import ReactMarkdown from 'react-markdown';

const BlogListItem = (props) => {
  const post = props.entry.fields
  console.log(post)
  return (
    <div>
      <li className="collection-item">
        <div className="container">
          <h3>{post.title}</h3>
          <blockquote>{post.description}</blockquote>
          <ReactMarkdown source={post.body} />
        </div>
        
      </li>
      
    </div>
  )
}

export default BlogListItem
