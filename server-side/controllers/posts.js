const handlePostsGet = (req, res, db) => {
    const { public } = 1;

    db.select('*').from('posts')
    .where({ public })
    .then(posts => {
        if(posts.length){
            res.json(posts)
        }else{
            res.status(400).json('No posts have been created at this time')
        }
    })
    .catch( err => res.status(400).json(err));
};

module.exports = {
    handlePostsGet
}
