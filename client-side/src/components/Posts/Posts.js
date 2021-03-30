import React from 'react';

/* LIBRARIES */
import IsoTopeGrid from 'react-isotope';
import Moment from 'moment';

import NewPost from '../NewPost/NewPost.js';

class Posts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: props.user,
            posts: []
        }
    }

    componentDidMount() {
      fetch('http://localhost:3000/posts', {
          method: 'get',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
      })
      .then(response => response.json())
      .then(posts => {
        this.setState({ posts: posts });
      })
      .catch(error => this.setState({ error }));
    }

    render(){
        return(
          <div>
            <div className="newPost">
              <NewPost user={ this.state.user } />
            </div>

            <div className="posts-layout">
              {
                this.state.posts ?
                this.state.posts.map((post) => {
                  return(
                    <div class="card border-info mb-3" >
                      <div class="card-header">
                        { post.post_title }
                      </div>

                      <div class="card-body">
                        <p class="card-text">
                          { post.post_body }
                        </p>

                        <p>
                          <span class="badge badge-pill badge-primary">Date Created: { Moment(post.created_at).format('DD MMM, YYYY') }</span>
                        </p>
                      </div>
                    </div>
                  );
                }) : "Loading..."
              }
            </div>
          </div>
        );
    }
}

export default Posts;
