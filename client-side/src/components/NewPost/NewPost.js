import React from 'react';

class NewPost extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
            public: ''
        }
    }

    onTitleChange = (event) => {
        this.setState({ title: event.target.value });
    }

    onBodyChange = (event) => {
        this.setState({ body: event.target.value });
    }

    onPublicChange = (event) => {
        this.setState({ public: event.target.value });
    }

    /* CONNECTING TO THE SERVER */
    onSubmitPost = () => {
        fetch('http://localhost:3000/newPost', {
            method: 'post',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify({
                user_id: this.state.users.user_id,
                post_title: this.state.title,
                post_body: this.state.body,
                public: this.state.public
            })
        })
        .then(response => response.json())
        .then(post => {
            if(post.length > 0){
                this.props.onRouteChange('home');
            }
        })
        .catch(error => this.setState({ error }));
    }

    render(){
        return(
            <div className="card border-info mt-5" >
              <div class="card-header">
                <h1>Create a new post</h1>
              </div>

              <div className="card-body">
                  <div className="form-group">
                      <label for="title">Title</label>
                      <input onChange={ this.onTitleChange } className="form-control" name="title" id="title"/>
                  </div>

                  <div className="form-group">
                      <label for="body">Body</label>
                      <input onChange={ this.onBodyChange } className="form-control" name="body" id="body"/>
                  </div>

                  <div className="form-check">
                      <label for="public" className="form-check-label">
                        <input onChange={ this.onPublicChange } class="form-check-input" type="checkbox" value="" checked="" />

                        Would you like to make the post public
                      </label>
                  </div>

                  <div className="">
                      <input onClick={ this.onSubmitPost} className="btn btn-outline-info" type="submit" value="New Post"/>
                  </div>
              </div>
            </div>
        );
    }
}

export default NewPost;
