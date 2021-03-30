const handlePostsGet = (req, res, db) => {
    db.select('*').from('posts')
    .where('public', '=', '1')
    .then(posts => {
        if(posts){
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
