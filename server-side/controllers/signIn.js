const handleSignIn = (db, bcrypt) => (req, res) => {
    const { email, password } = req.body;

    // CHECKING FOR EMPTY FORM
    if(!email || !password){
        return res.status(400).json('Form is empty, please fill in form properly');
    }

    db.select('email', 'password').from('users')
    .where('email', '=', email)
    .then(data => {
       const isValid = bcrypt.compareSync(password, data[0].password);

       if(isValid){
           return db.select('*').from('users')
           .where('email', '=', email)
           .then(user => {
               res.json(user[0])
           })
           .catch(err => res.json('Unable to get user'))
       }else{
           res.status(400).json('Wrong email and/or password')
       }
    })
    .catch(err => res.status(400).json(err))
};

module.exports = {
    handleSignIn
};
