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
      if (event.target.value ===  1) {
        this.setState({ public: event.target.value});
      }

      this.setState({ public: 0});
    }

    onSubmitPost = () => {
        fetch('http://localhost:3000/newPost', {
            method: 'post',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify({
                userID: this.props.user.userID,
                title: this.state.title,
                body: this.state.body,
                public: this.state.public
            })
        })
        .then(response => response.json())
        .then(posts => posts)
        .catch(error => this.setState({ error }));
    }

    render(){
          return(
            <div className="model">
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
                  <input onChange={ this.onPublicChange } class="form-check-input" type="checkbox" value="1"/>

                    Would you like to make the post public
                  </label>
              </div>

              <div className="modal-footer">
                <button onClick={ this.onSubmitPost } type="submit" className="btn btn-outline-info">Save new post</button>
              </div>
            </div>
          );
    }
}

export default NewPost;
