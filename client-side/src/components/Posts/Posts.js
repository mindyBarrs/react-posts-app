import React from 'react';

import NewPost from '../NewPost/NewPost.js';

class Posts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
            user: props.user,
            posts: {
              title: '',
              body: '',
              created: '',
            }
        }
    }

    // SETTING UP & LOADING THE USER
    loadPosts = (data) => {
      console.log(data);
      this.setState({ posts: {
          title: data.post_title,
          body: data.post_body,
          created: data.create_at,
      }});
    }

    showModal = () => {
      this.setState({
        show: true
      });
    };

    render(){
      const { show } = this.state;

        return(
          <div>
            <div className="newPost">
              <button className="btn btn-success btn-lg" onClick={ this.showModal }>
                Create a new post
              </button>

              <NewPost show={ this.state.show } user={ this.state.user } />
            </div>

            <div className="">
              <div class="card border-info mb-3" >
                <div class="card-header">
                  Post Title
                </div>

                <div class="card-body">
                  <p class="card-text">
                    Post body
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Posts;
