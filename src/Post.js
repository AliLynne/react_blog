import React, { Component, Fragment } from 'react';
import * as contentful from 'contentful';
import { Link } from 'react-router-dom';
import moment from 'moment';

import ReactMarkdown from 'react-markdown/with-html';

class Post extends Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      postId: this.props.match.params.id,
      post: null
    }
  }

  client = contentful.createClient({
    space: process.env.REACT_APP_SPACE_ID,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN
  })

  componentDidMount() {
    this.client.getEntry(this.state.postId)
      .then(entry => this.setState({
        post: entry
      }))
      .catch(console.error)
  }


  render() {
    const post = this.state.post 
    console.log(post)
    let content
    if (post) {
      content = 
        <Fragment>
          <h4>{post.fields.title}</h4>
          <p>Author: {post.fields.author.fields.name}</p>
          <p>Created: {moment(post.sys.createdAt).fromNow()}</p>
          <p>Last Updated: {moment(post.sys.updatedAt).fromNow()}</p>
          <ReactMarkdown source={post.fields.body} />
            {post.fields.tags.map(tag => {
              return <span key={tag.sys.id} className="new badge" data-badge-caption={tag.fields.title}>
                     </span>
            })}
          
        </Fragment>
      
    }
    
    return (
      <article className="container">
        {content}
      </article>
    )
  }
}

export default Post;
