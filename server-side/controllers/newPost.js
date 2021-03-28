const handleNewPost = (db) => (req, res) => {
    const { userID, body, title, public } = req.body;

    // CHECKING FOR EMPTY FORM
    if(!email || !password){
        return res.status(400).json('Form is empty, please fill in form properly');
    }

    db.into('posts')
    .returning('*')
    .insert({
        user_id: userID,
        post_title: title,
        post_body: body,
        public: public,
        created_at: new Date
    })
    .then(posts => {
        res.json(posts);
    })
    .catch(err => res.status(400).json(err))
};

module.exports = {
    handleNewPost
};
