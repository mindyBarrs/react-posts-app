const handleRegister = (db, bcrypt) => (req, res) => {
    const { email, name, password } = req.body;

    // CHECKING FOR EMPTY FORM
    if(!email || !name || !password) {
        return res.status(400).json('Form is empty, please fill in form properly');
    }

    // SECURING THE PASSWORD
    const hash = bcrypt.hashSync(password);

    // ADD NEW USER TO DATABASE
    db.into('users')
    .returning('*')
    .insert({
        name: name,
        email: email,
        entries: 0,
        joined_at: new Date(),
        password: hash
    })
    .then(user_id => {
        res.json(user_id[0]);
    })
    .catch(err => res.status(400).json(err))
};

module.exports = {
    handleRegister
};
