const handleNewPost = (db) => (req, res) => {
    const { userID, body, title, public } = req.body;

    // CHECKING FOR EMPTY FORM
    if(!body || !title ){
        return res.status(400).json('Form is empty, please fill in form properly');
    }

    db.into('posts')
    .insert({
        user_id: userID,
        post_title: title,
        post_body: body,
        public: public,
        created_at: new Date
    })
    .then(
      db
      .select('*')
      .from('posts')
      .where({ public })
      .then(posts => {
          if(posts){
              res.json(posts)
          }else{
              res.status(400).json('No posts have been created at this time')
          }
      })
    )
    .catch(err => res.status(400).json(err))
};

module.exports = {
    handleNewPost
};
