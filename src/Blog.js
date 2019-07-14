import React, { Component } from 'react'
import * as contentful from 'contentful'
import BlogListItem from './BlogListItem'

class Blog extends Component {
  constructor(props) {
    super(props)

    this.state = {
      entries: []
    }
  }

  client = contentful.createClient({
    space: process.env.REACT_APP_SPACE_ID,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN
  })

  componentDidMount() {
    this.client.getEntries({
      content_type: 'blogPost'
    })
      .then(entries => this.setState({entries}))
  }

  render() {
    const entries = this.state.entries.items
    console.log(entries)
    return (
      <div>
        
        <ul className="collection">
          <li className="collection-header center"><h2>Blog Posts</h2></li>
          { entries && entries.map(entry => {
            return <BlogListItem key={entry.sys.id} entry={entry} />
          })}
        </ul>
      </div>
    )
  }
}

export default Blog